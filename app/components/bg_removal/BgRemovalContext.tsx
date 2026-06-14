'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback, useRef } from 'react';
import { removeBackground } from '@imgly/background-removal';

export type BgJobStatus = 'queued' | 'processing' | 'done' | 'error';

export interface BgJob {
  id: string;
  file: File;
  fileName: string;
  originalUrl: string;
  resultUrl: string | null;
  status: BgJobStatus;
}

interface BgRemovalContextType {
  jobs: BgJob[];
  isProcessingQueue: boolean;
  addJobs: (files: File[]) => void;
  removeJob: (id: string) => void;
  clearAll: () => void;
  processQueue: () => Promise<void>;
}

const BgRemovalContext = createContext<BgRemovalContextType | undefined>(undefined);

export const BgRemovalProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<BgJob[]>([]);
  const [isProcessingQueue, setIsProcessingQueue] = useState(false);
  const processingRef = useRef(false);

  const addJobs = useCallback((files: File[]) => {
    const newJobs: BgJob[] = files.map(file => ({
      id: `job-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      file,
      fileName: file.name,
      originalUrl: URL.createObjectURL(file),
      resultUrl: null,
      status: 'queued',
    }));
    
    setJobs(prev => [...prev, ...newJobs]);
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
  }, []);

  const clearAll = useCallback(() => {
    setJobs(prev => {
      prev.forEach(job => {
        URL.revokeObjectURL(job.originalUrl);
        if (job.resultUrl) URL.revokeObjectURL(job.resultUrl);
      });
      return [];
    });
  }, []);

  const processQueue = useCallback(async () => {
    if (processingRef.current) return;
    processingRef.current = true;
    setIsProcessingQueue(true);

    let keepProcessing = true;

    while (keepProcessing) {
      // Find the next queued job
      let nextJobId: string | null = null;
      setJobs(prev => {
        const queuedJob = prev.find(j => j.status === 'queued');
        if (queuedJob) {
          nextJobId = queuedJob.id;
          return prev.map(j => j.id === queuedJob.id ? { ...j, status: 'processing' } : j);
        }
        return prev;
      });

      // Wait a tick for state to update
      await new Promise(resolve => setTimeout(resolve, 0));

      if (!nextJobId) {
        keepProcessing = false;
        break;
      }

      // We have a job, process it. But we need to get its url
      let currentUrl = '';
      setJobs(prev => {
        const job = prev.find(j => j.id === nextJobId);
        if (job) currentUrl = job.originalUrl;
        return prev;
      });

      if (!currentUrl) continue;

      try {
        const blob = await removeBackground(currentUrl);
        const resultUrl = URL.createObjectURL(blob);
        
        setJobs(prev => prev.map(j => j.id === nextJobId ? { ...j, status: 'done', resultUrl } : j));
      } catch (error) {
        console.error('Failed to remove bg for job', nextJobId, error);
        setJobs(prev => prev.map(j => j.id === nextJobId ? { ...j, status: 'error' } : j));
      }
    }

    processingRef.current = false;
    setIsProcessingQueue(false);
  }, []);

  // Process automatically when jobs are added
  React.useEffect(() => {
    const hasQueued = jobs.some(j => j.status === 'queued');
    if (hasQueued && !isProcessingQueue) {
      processQueue();
    }
  }, [jobs, isProcessingQueue, processQueue]);

  return (
    <BgRemovalContext.Provider value={{ jobs, isProcessingQueue, addJobs, removeJob, clearAll, processQueue }}>
      {children}
    </BgRemovalContext.Provider>
  );
};

export const useBgRemoval = () => {
  const context = useContext(BgRemovalContext);
  if (!context) throw new Error('useBgRemoval must be used within BgRemovalProvider');
  return context;
};
