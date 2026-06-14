'use client';

import React, { useState } from 'react';
import { useBgRemoval } from './BgRemovalContext';
import { DownloadCloud, Trash2, Loader2, Sparkles, XCircle, CheckCircle } from 'lucide-react';
import { createZipArchive } from './utils/bgRemovalUtils';

export default function BgRemoverHeader() {
  const { jobs, clearAll, isProcessingQueue, cancelQueue, backgroundColor, exportFormat } = useBgRemoval();
  const [isZipping, setIsZipping] = useState(false);

  const completedJobs = jobs.filter(j => j.status === 'done' && j.resultUrl);
  const processingJobs = jobs.filter(j => j.status === 'processing');
  const queuedJobs = jobs.filter(j => j.status === 'queued');
  const totalJobs = jobs.length;
  
  const completedCount = completedJobs.length;
  const remainingCount = processingJobs.length + queuedJobs.length;
  
  const globalProgress = totalJobs > 0 ? (completedCount / totalJobs) * 100 : 0;

  const handleDownloadAll = async () => {
    if (completedJobs.length === 0) return;
    
    setIsZipping(true);
    try {
      await createZipArchive(completedJobs, backgroundColor, exportFormat);
    } catch (err) {
      console.error('Error generating zip:', err);
      alert('Failed to generate ZIP file.');
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="flex flex-col border-b border-border-subtle bg-bg-card transition-colors duration-300">
      
      {/* Top Action Bar */}
      <header className="flex items-center justify-between w-full px-4 h-14">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shadow-sm">
            <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-text-main leading-tight">Batch Background Remover</h1>
            <p className="text-[10px] text-text-muted font-medium leading-tight">Local AI Processing</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {totalJobs > 0 && !isProcessingQueue && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-red-500 transition-colors px-2.5 py-1.5 rounded-lg border border-transparent hover:border-red-500/20"
            >
              <Trash2 size={13} />
              <span className="hidden sm:inline">Clear All</span>
            </button>
          )}

          {isProcessingQueue && (
            <button
              onClick={cancelQueue}
              className="flex items-center gap-1.5 text-xs font-semibold text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 transition-colors px-3 py-1.5 rounded-lg"
            >
              <XCircle size={13} />
              <span className="hidden sm:inline">Cancel</span>
            </button>
          )}

          {totalJobs > 0 && (
            <button
              onClick={handleDownloadAll}
              disabled={completedJobs.length === 0 || isZipping}
              className="flex items-center gap-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 disabled:cursor-not-allowed transition-all px-4 py-1.5 rounded-lg shadow-sm"
            >
              {isZipping ? <Loader2 size={14} className="animate-spin" /> : <DownloadCloud size={14} />}
              <span className="hidden sm:inline">Download ZIP</span>
            </button>
          )}
        </div>
      </header>

      {/* Global Progress Bar Area (Only show when processing or jobs exist) */}
      {totalJobs > 0 && (
        <div className="w-full px-4 py-3 bg-bg-root flex flex-col gap-2 border-t border-border-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-text-main">
              {isProcessingQueue ? (
                <>
                  <Sparkles size={14} className="text-indigo-500" />
                  Processing images...
                </>
              ) : (
                <>
                  <CheckCircle size={14} className="text-green-500" />
                  Processing complete
                </>
              )}
            </div>
            <div className="text-xs font-bold text-text-muted bg-bg-card px-2 py-0.5 rounded border border-border-subtle">
              {completedCount}/{totalJobs}
            </div>
          </div>
          
          <div className="w-full h-2 bg-border-subtle rounded-full overflow-hidden flex">
            <div 
              className="h-full bg-indigo-500 transition-all duration-300 ease-out"
              style={{ width: `${globalProgress}%` }}
            />
            {isProcessingQueue && processingJobs.length > 0 && (
              <div 
                className="h-full bg-indigo-400 transition-all duration-300 ease-out"
                style={{ width: `${(1 / totalJobs) * processingJobs[0].progress}%` }}
              />
            )}
          </div>
        </div>
      )}

    </div>
  );
}
