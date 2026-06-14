'use client';

import React, { useState } from 'react';
import { useBgRemoval } from './BgRemovalContext';
import { DownloadCloud, Trash2, Loader2, Sparkles } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function BgRemoverHeader() {
  const { jobs, clearAll, isProcessingQueue } = useBgRemoval();
  const [isZipping, setIsZipping] = useState(false);

  const completedJobs = jobs.filter(j => j.status === 'done' && j.resultUrl);
  const totalJobs = jobs.length;

  const handleDownloadAll = async () => {
    if (completedJobs.length === 0) return;
    
    setIsZipping(true);
    try {
      const zip = new JSZip();
      
      const promises = completedJobs.map(async (job) => {
        if (!job.resultUrl) return;
        const response = await fetch(job.resultUrl);
        const blob = await response.blob();
        const baseName = job.fileName.replace(/\.[^/.]+$/, "");
        zip.file(`${baseName}_nobg.png`, blob);
      });

      await Promise.all(promises);

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'pixelcraft_bg_removed.zip');
    } catch (err) {
      console.error('Error generating zip:', err);
      alert('Failed to generate ZIP file.');
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <header className="flex items-center justify-between w-full px-4 h-14 bg-indigo-600 dark:bg-indigo-950 border-b border-indigo-700 dark:border-indigo-900 transition-colors duration-300">
      
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shadow-sm">
          <Sparkles size={16} className="text-white" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-white leading-tight">Batch Background Remover</h1>
          <p className="text-[10px] text-indigo-200 font-medium leading-tight">Local AI Processing</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {totalJobs > 0 && (
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <span className="text-xs font-semibold text-indigo-100">
              {completedJobs.length} / {totalJobs} completed
            </span>
            {isProcessingQueue && <Loader2 size={14} className="text-indigo-200 animate-spin" />}
          </div>
        )}

        {totalJobs > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all px-2.5 py-1.5 rounded-lg border border-transparent hover:border-white/20"
          >
            <Trash2 size={13} />
            <span className="hidden sm:inline">Clear All</span>
          </button>
        )}

        <button
          onClick={handleDownloadAll}
          disabled={completedJobs.length === 0 || isZipping}
          className="flex items-center gap-2 text-xs font-bold text-indigo-600 bg-white hover:bg-indigo-50 disabled:bg-white/30 disabled:text-white/50 disabled:cursor-not-allowed transition-all px-3 py-1.5 rounded-lg shadow-sm"
        >
          {isZipping ? <Loader2 size={14} className="animate-spin" /> : <DownloadCloud size={14} />}
          <span className="hidden sm:inline">Download ZIP</span>
        </button>
      </div>

    </header>
  );
}
