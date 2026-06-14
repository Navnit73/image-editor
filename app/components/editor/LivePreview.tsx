'use client';

import React from 'react';
import { useEditor } from './EditorContext';
import { useImageProcessor } from '../../hooks/useImageProcessor';
import { Download, Eye } from 'lucide-react';

export default function LivePreview() {
  const { livePreview, isProcessing, format, quality, imageFile } = useEditor();

  // Initialize the image processor hook to listen for changes
  useImageProcessor();

  const handleDownload = () => {
    if (!livePreview.url) return;
    
    const a = document.createElement('a');
    a.href = livePreview.url;
    // Extract original extension or use the new format's extension
    const ext = format === 'image/jpeg' ? 'jpg' : format === 'image/png' ? 'png' : 'webp';
    a.download = `edited-image.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 p-4 border-b border-zinc-200 dark:border-zinc-800">
        <Eye size={16} className="text-indigo-500" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Live Preview</h3>
      </div>

      <div className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full flex-1 min-h-[200px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center overflow-hidden relative mb-6">
          {!imageFile ? (
            <span className="text-sm text-zinc-400 dark:text-zinc-500">No image</span>
          ) : isProcessing ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm z-10">
              <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : livePreview.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={livePreview.url}
              alt="Live Preview"
              className="max-w-full max-h-full object-contain"
            />
          ) : null}
        </div>

        {imageFile && livePreview.width > 0 && (
          <div className="w-full space-y-6">
            <div className="flex justify-center">
              <div className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold">
                {livePreview.width} &times; {livePreview.height}px
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="text-zinc-500">Format</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md text-xs">
                  {format.split('/')[1]}
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="text-zinc-500">Quality</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{quality}%</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="text-zinc-500">Actual Size</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{livePreview.sizeKb} KB</span>
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={!livePreview.url || isProcessing}
              className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-indigo-500/20"
            >
              <Download size={18} />
              Download Image
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
