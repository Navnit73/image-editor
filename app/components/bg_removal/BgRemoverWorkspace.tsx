'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useBgRemoval } from './BgRemovalContext';
import { downloadProcessedImage } from './utils/bgRemovalUtils';
import { UploadCloud, CheckCircle, XCircle, Download } from 'lucide-react';

export default function BgRemoverWorkspace() {
  const { jobs, addJobs, selectedJobId, setSelectedJobId, backgroundColor, exportFormat } = useBgRemoval();
  
  const selectedJob = jobs.find(j => j.id === selectedJobId) || jobs[0];

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
    noClick: jobs.length > 0, // Disable click to upload in the main area when jobs exist
  });

  const CircularProgress = ({ progress }: { progress: number }) => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
          <circle
            className="text-white/30"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
          />
          <circle
            className="text-indigo-500 transition-all duration-300 ease-out"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
          />
        </svg>
        <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 mt-1">{Math.round(progress)}%</span>
      </div>
    );
  };

  const getBgStyle = () => {
    if (backgroundColor !== 'transparent') {
      return { backgroundColor };
    }
    return {
      backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
    };
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-bg-root" {...getRootProps()}>
      <input {...getInputProps()} />
      
      {jobs.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <div
            className={`w-full max-w-lg p-10 sm:p-16 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
              isDragActive
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 scale-[1.02]'
                : 'border-border-subtle hover:border-indigo-500/50 hover:bg-bg-card'
            }`}
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors ${isDragActive ? 'bg-indigo-500 text-white' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500'}`}>
              <UploadCloud size={36} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-text-main mb-3">
              {isDragActive ? 'Drop images here!' : 'Upload Images for Bulk BG Removal'}
            </h4>
            <p className="text-sm text-text-muted mb-6 max-w-sm mx-auto">
              Drag & drop multiple images or click to select. We process them locally on your device for total privacy.
            </p>
            <div className="flex gap-2 justify-center">
              {['JPG', 'PNG', 'WEBP'].map((fmt) => (
                <span key={fmt} className="px-2.5 py-1 bg-bg-card border border-border-subtle text-text-muted rounded-md text-[10px] font-bold shadow-sm">{fmt}</span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden relative">
          
          {/* Drag Overlay */}
          {isDragActive && (
            <div className="absolute inset-0 z-50 bg-indigo-500/10 backdrop-blur-[2px] border-4 border-indigo-500 border-dashed rounded-xl flex items-center justify-center">
              <div className="bg-white dark:bg-bg-card px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
                <UploadCloud className="text-indigo-500" size={28} />
                <span className="text-lg font-bold text-text-main">Drop images to add to queue</span>
              </div>
            </div>
          )}

          {/* Top Thumbnails Carousel */}
          <div className="flex-shrink-0 p-4 border-b border-border-subtle bg-bg-card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-text-main">{jobs.length} image{jobs.length !== 1 ? 's' : ''}</h3>
              <div className="flex items-center gap-2 text-xs font-semibold text-text-muted">
                {jobs.filter(j => j.status === 'processing').length} processing
              </div>
            </div>
            
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-border-subtle">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJobId(job.id)}
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedJobId === job.id ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/20' : 'border-border-subtle hover:border-indigo-300'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={job.originalUrl}
                    alt={job.fileName}
                    className={`w-full h-full object-cover ${job.status === 'processing' ? 'opacity-30 grayscale blur-[1px]' : ''}`}
                  />
                  
                  {/* Status Overlays */}
                  {job.status === 'processing' && (
                    <div className="absolute inset-0 bg-white/60 dark:bg-black/60 flex items-center justify-center backdrop-blur-[1px]">
                      <CircularProgress progress={job.progress} />
                    </div>
                  )}
                  {job.status === 'queued' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Queued</span>
                    </div>
                  )}
                  {job.status === 'error' && (
                    <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5">
                      <XCircle size={14} />
                    </div>
                  )}
                  {job.status === 'done' && (
                    <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle size={14} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Preview Area */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 flex flex-col">
            <h3 className="text-sm font-bold text-text-main mb-4">Preview</h3>
            
            <div className="flex-1 relative rounded-2xl overflow-hidden border border-border-subtle shadow-inner bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-[300px]">
              
              {selectedJob ? (
                <>
                  {/* Background Layer */}
                  <div className="absolute inset-0 z-0 transition-colors duration-300" style={getBgStyle()} />
                  
                  {/* Image Layer */}
                  <img
                    src={selectedJob.status === 'done' && selectedJob.resultUrl ? selectedJob.resultUrl : selectedJob.originalUrl}
                    alt={selectedJob.fileName}
                    className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 z-10 drop-shadow-xl"
                  />
                  
                  {/* Download Action */}
                  {selectedJob.status === 'done' && selectedJob.resultUrl && (
                    <div className="absolute bottom-4 right-4 z-20">
                      <button
                        onClick={() => downloadProcessedImage(selectedJob.resultUrl!, selectedJob.fileName, backgroundColor, exportFormat)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-lg transition-colors"
                      >
                        <Download size={16} />
                        Download
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-text-muted text-sm font-medium z-10">Select an image to preview</div>
              )}

            </div>
          </div>

        </div>
      )}
    </div>
  );
}
