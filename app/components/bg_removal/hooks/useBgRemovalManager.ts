'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { removeBackground } from '@imgly/background-removal';
import { BgJob } from '../types';

// Process up to 2 images in parallel for speed
const CONCURRENCY = 2;

export function useBgRemovalManager() {
  const [jobs, setJobs] = useState<BgJob[]>([]);
  const jobsRef = useRef<BgJob[]>([]);
  const [isProcessingQueue, setIsProcessingQueue] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [exportFormat, setExportFormat] = useState<'image/png' | 'image/webp'>('image/png');

  const processingRef = useRef(false);
  const cancelRef = useRef(false);
  const activeWorkersRef = useRef(0);

  useEffect(() => {
    jobsRef.current = jobs;
  }, [jobs]);

  const updateJob = useCallback((id: string, update: Partial<BgJob>) => {
    setJobs(prev => prev.map(j => j.id === id ? { ...j, ...update } : j));
  }, []);

  const addJobs = useCallback((files: File[]) => {
    const newJobs: BgJob[] = files.map(file => ({
      id: `job-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      file,
      fileName: file.name,
      originalUrl: URL.createObjectURL(file),
      resultUrl: null,
      status: 'queued' as const,
      progress: 0,
    }));

    setJobs(prev => {
      const updated = [...prev, ...newJobs];
      if (!selectedJobId && updated.length > 0) {
        setSelectedJobId(updated[0].id);
      }
      return updated;
    });

    cancelRef.current = false;
  }, [selectedJobId]);

  const removeJob = useCallback((id: string) => {
    setJobs(prev => {
      const job = prev.find(j => j.id === id);
      if (job) {
        URL.revokeObjectURL(job.originalUrl);
        if (job.resultUrl) URL.revokeObjectURL(job.resultUrl);
      }
      return prev.filter(j => j.id !== id);
    });
    setSelectedJobId(prev => prev === id ? null : prev);
  }, []);

  const clearAll = useCallback(() => {
    cancelRef.current = true;
    setJobs(prev => {
      prev.forEach(job => {
        URL.revokeObjectURL(job.originalUrl);
        if (job.resultUrl) URL.revokeObjectURL(job.resultUrl);
      });
      return [];
    });
    setSelectedJobId(null);
    processingRef.current = false;
    activeWorkersRef.current = 0;
  }, []);

  const cancelQueue = useCallback(() => {
    cancelRef.current = true;
    setJobs(prev => prev.map(j =>
      j.status === 'processing' || j.status === 'queued' ? { ...j, status: 'error', progress: 0 } : j
    ));
  }, []);

  // Process a single job
  const processJob = useCallback(async (job: BgJob) => {
    if (cancelRef.current) return;

    // Mark as processing
    setJobs(prev => prev.map(j => j.id === job.id ? { ...j, status: 'processing', progress: 5 } : j));

    // Smooth fake progress while actual processing occurs
    let fakeProgress = 5;
    const progressInterval = setInterval(() => {
      fakeProgress = Math.min(fakeProgress + Math.random() * 6 + 2, 88);
      setJobs(prev => prev.map(j =>
        j.id === job.id && j.status === 'processing' ? { ...j, progress: fakeProgress } : j
      ));
    }, 250);

    try {
      const blob = await removeBackground(job.originalUrl, {
        // Faster model variant if available
        model: 'small',
        output: { quality: 0.9 },
      } as any);

      clearInterval(progressInterval);

      if (cancelRef.current) return;

      const resultUrl = URL.createObjectURL(blob);
      setJobs(prev => prev.map(j =>
        j.id === job.id ? { ...j, status: 'done', resultUrl, progress: 100 } : j
      ));

      // Auto-select the first completed job for preview
      setSelectedJobId(prev => {
        const currentJobs = jobsRef.current;
        const selectedJob = currentJobs.find(j => j.id === prev);
        if (!selectedJob || selectedJob.status === 'queued') return job.id;
        return prev;
      });

    } catch (err) {
      clearInterval(progressInterval);
      console.error('Failed to process job', job.id, err);
      setJobs(prev => prev.map(j =>
        j.id === job.id ? { ...j, status: 'error', progress: 0 } : j
      ));
    }
  }, []);

  // Queue orchestrator using parallel workers
  const processQueue = useCallback(async () => {
    if (processingRef.current) return;
    processingRef.current = true;
    setIsProcessingQueue(true);

    const runWorker = async () => {
      while (!cancelRef.current) {
        const queued = jobsRef.current.find(j => j.status === 'queued');
        if (!queued) break;

        // Optimistically mark to avoid double-claiming
        setJobs(prev => prev.map(j =>
          j.id === queued.id && j.status === 'queued' ? { ...j, status: 'processing', progress: 1 } : j
        ));
        // Small yield
        await new Promise(r => setTimeout(r, 10));

        await processJob(queued);
      }
    };

    // Spawn CONCURRENCY workers
    const workers: Promise<void>[] = [];
    for (let i = 0; i < CONCURRENCY; i++) {
      workers.push(runWorker());
    }
    await Promise.all(workers);

    processingRef.current = false;
    setIsProcessingQueue(false);
  }, [processJob]);

  // Trigger queue automatically
  useEffect(() => {
    const hasQueued = jobs.some(j => j.status === 'queued');
    if (hasQueued && !processingRef.current && !cancelRef.current) {
      processQueue();
    }
    // Auto-select first job if none selected
    if (jobs.length > 0 && !selectedJobId) {
      setSelectedJobId(jobs[0].id);
    }
  }, [jobs.length]);

  return {
    jobs,
    isProcessingQueue,
    selectedJobId,
    setSelectedJobId,
    backgroundColor,
    setBackgroundColor,
    exportFormat,
    setExportFormat,
    addJobs,
    removeJob,
    clearAll,
    processQueue,
    cancelQueue,
  };
}