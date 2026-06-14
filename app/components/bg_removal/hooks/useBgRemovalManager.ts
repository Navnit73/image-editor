'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { removeBackground } from '@imgly/background-removal';
import { BgJob } from '../types';

export function useBgRemovalManager() {
  const [jobs, setJobs] = useState<BgJob[]>([]);
  const jobsRef = useRef<BgJob[]>([]);
  const [isProcessingQueue, setIsProcessingQueue] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [exportFormat, setExportFormat] = useState<'image/png' | 'image/webp'>('image/png');
  
  const processingRef = useRef(false);
  const cancelRef = useRef(false);

  useEffect(() => {
    jobsRef.current = jobs;
  }, [jobs]);

  const addJobs = useCallback((files: File[]) => {
    const newJobs: BgJob[] = files.map(file => ({
      id: `job-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      file,
      fileName: file.name,
      originalUrl: URL.createObjectURL(file),
      resultUrl: null,
      status: 'queued',
      progress: 0,
    }));
    
    setJobs(prev => {
      const updated = [...prev, ...newJobs];
      // Auto select first item if none selected
      if (prev.length === 0 && updated.length > 0) {
        setSelectedJobId(updated[0].id);
      }
      return updated;
    });
    
    cancelRef.current = false;
  }, []);

  const removeJob = useCallback((id: string) => {
    setJobs(prev => {
      const job = prev.find(j => j.id === id);
      if (job) {
        URL.revokeObjectURL(job.originalUrl);
        if (job.resultUrl) URL.revokeObjectURL(job.resultUrl);
      }
      return prev.filter(j => j.id !== id);
    });
    setSelectedJobId(prev => (prev === id ? null : prev));
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
  }, []);

  const cancelQueue = useCallback(() => {
    cancelRef.current = true;
    setJobs(prev => prev.map(j => j.status === 'processing' || j.status === 'queued' ? { ...j, status: 'error', progress: 0 } : j));
  }, []);

  const processQueue = useCallback(async () => {
    if (processingRef.current) return;
    processingRef.current = true;
    setIsProcessingQueue(true);

    let keepProcessing = true;

    while (keepProcessing && !cancelRef.current) {
      // Find the next queued job synchronously
      const queuedJob = jobsRef.current.find(j => j.status === 'queued');
      if (!queuedJob) {
        keepProcessing = false;
        break;
      }
      
      const nextJobId = queuedJob.id;
      const currentUrl = queuedJob.originalUrl;

      setJobs(prev => prev.map(j => j.id === nextJobId ? { ...j, status: 'processing', progress: 5 } : j));

      // Wait a tick for state to update visually
      await new Promise(resolve => setTimeout(resolve, 50));

      if (cancelRef.current) {
        keepProcessing = false;
        break;
      }

      if (!currentUrl) continue;

      let currentProgress = 5;
      const progressInterval = setInterval(() => {
        setJobs(prev => prev.map(j => {
          if (j.id === nextJobId && j.status === 'processing') {
            currentProgress += (Math.random() * 8);
            if (currentProgress > 90) currentProgress = 90;
            return { ...j, progress: currentProgress };
          }
          return j;
        }));
      }, 300);

      try {
        const blob = await removeBackground(currentUrl);
        if (cancelRef.current) {
          clearInterval(progressInterval);
          break;
        }
        const resultUrl = URL.createObjectURL(blob);
        
        setJobs(prev => prev.map(j => j.id === nextJobId ? { ...j, status: 'done', resultUrl, progress: 100 } : j));
      } catch (error) {
        console.error('Failed to remove bg for job', nextJobId, error);
        setJobs(prev => prev.map(j => j.id === nextJobId ? { ...j, status: 'error', progress: 0 } : j));
      } finally {
        clearInterval(progressInterval);
      }
    }

    processingRef.current = false;
    setIsProcessingQueue(false);
  }, []);

  // Process automatically when jobs are added
  useEffect(() => {
    const hasQueued = jobs.some(j => j.status === 'queued');
    if (hasQueued && !isProcessingQueue && !cancelRef.current) {
      processQueue();
    }
  }, [jobs, isProcessingQueue, processQueue]);

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
    cancelQueue
  };
}
