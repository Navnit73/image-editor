'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useBgRemoval } from './BgRemovalContext';
import { UploadCloud, CheckCircle, XCircle, Loader2, Download } from 'lucide-react';

export default function BgRemoverWorkspace() {
  const { jobs, addJobs, removeJob } = useBgRemoval();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length > 0) {
        addJobs(acceptedFiles);
      }
    },
    [addJobs]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.webp'] },
    multiple: true,
  });

  const downloadFile = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.replace(/\.[^/.]+$/, "") + "_nobg.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-bg-root">
      {jobs.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <div
            {...getRootProps()}
            className={`w-full max-w-lg p-10 sm:p-16 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
              isDragActive
                ? 'border-accent-main bg-accent-muted scale-[1.02]'
                : 'border-border-subtle hover:border-accent-main/60 hover:bg-bg-card'
            }`}
          >
            <input {...getInputProps()} />
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors ${isDragActive ? 'bg-accent-main' : 'bg-accent-muted'}`}>
              <UploadCloud size={36} className={isDragActive ? 'text-white' : 'text-accent-main'} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-text-main mb-3">
              {isDragActive ? 'Drop images here!' : 'Upload Images for Bulk BG Removal'}
            </h4>
            <p className="text-sm text-text-muted mb-6 max-w-sm mx-auto">
              Drag & drop multiple images or tap to select. We process them locally on your device for total privacy.
            </p>
            <div className="flex gap-2 justify-center">
              {['JPG', 'PNG', 'WEBP'].map((fmt) => (
                <span key={fmt} className="px-2.5 py-1 bg-bg-card border border-border-subtle text-text-muted rounded-md text-[10px] font-bold shadow-sm">{fmt}</span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <div
            {...getRootProps()}
            className={`mb-6 p-6 border-2 border-dashed rounded-xl flex items-center justify-center text-center cursor-pointer transition-colors ${
              isDragActive ? 'border-accent-main bg-accent-muted' : 'border-border-subtle hover:border-accent-main/50 hover:bg-bg-card'
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex items-center gap-3">
              <UploadCloud className={isDragActive ? 'text-accent-main' : 'text-text-muted'} size={24} />
              <span className="text-sm font-semibold text-text-main">
                {isDragActive ? 'Drop more files here' : 'Click or drag more files to add to queue'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-bg-card rounded-xl border border-border-subtle overflow-hidden flex flex-col group">
                <div className="relative aspect-square bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center overflow-hidden">
                  {/* Checkerboard background for transparent results */}
                  {job.status === 'done' && (
                    <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }} />
                  )}
                  
                  {/* Image */}
                  <img
                    src={job.resultUrl || job.originalUrl}
                    alt={job.fileName}
                    className={`max-w-full max-h-full object-contain relative z-10 transition-opacity duration-300 ${job.status === 'processing' ? 'opacity-40 grayscale' : ''}`}
                  />

                  {/* Overlays */}
                  {job.status === 'queued' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
                      <span className="px-3 py-1 bg-black/60 text-white text-xs font-bold rounded-full backdrop-blur-sm">Queued</span>
                    </div>
                  )}
                  {job.status === 'processing' && (
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-20">
                      <Loader2 className="animate-spin text-white mb-2" size={28} />
                      <span className="text-white text-xs font-bold">Removing BG...</span>
                    </div>
                  )}
                  {job.status === 'error' && (
                    <div className="absolute inset-0 bg-red-500/20 flex flex-col items-center justify-center z-20">
                      <XCircle className="text-red-500 mb-1" size={28} />
                      <span className="text-red-500 text-xs font-bold bg-white/90 px-2 py-0.5 rounded">Failed</span>
                    </div>
                  )}
                  {job.status === 'done' && (
                    <div className="absolute top-2 right-2 z-20 bg-green-500 text-white rounded-full p-1 shadow-md">
                      <CheckCircle size={16} />
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex items-center justify-center gap-2">
                    {job.status === 'done' && job.resultUrl && (
                      <button
                        onClick={(e) => { e.stopPropagation(); downloadFile(job.resultUrl!, job.fileName); }}
                        className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"
                        title="Download"
                      >
                        <Download size={18} />
                      </button>
                    )}
                    <button
                      onClick={(e) => { e.stopPropagation(); removeJob(job.id); }}
                      className="p-2 bg-white/20 hover:bg-red-500/80 text-white rounded-full backdrop-blur-md transition-colors"
                      title="Remove"
                    >
                      <XCircle size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="p-3 border-t border-border-subtle bg-bg-card">
                  <p className="text-xs font-medium text-text-main truncate" title={job.fileName}>
                    {job.fileName}
                  </p>
                  <p className="text-[10px] text-text-muted mt-0.5">
                    {job.status === 'done' ? 'Transparent PNG' : job.status === 'processing' ? 'Processing...' : job.status === 'queued' ? 'Waiting in queue' : 'Error'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
