'use client';

import React, { useEffect, useState } from 'react';
import { preload } from '@imgly/background-removal';
import { BrainCircuit, CheckCircle } from 'lucide-react';

export default function ModelPreloader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'initializing' | 'downloading' | 'ready' | 'error'>('initializing');

  useEffect(() => {
    let isMounted = true;
    
    const initModel = async () => {
      try {
        await preload({
          progress: (key, current, total) => {
            if (!isMounted) return;
            if (key.startsWith('fetch:')) {
              setStatus('downloading');
              setProgress(Math.round((current / total) * 100));
            }
          }
        });
        
        if (isMounted) {
          setStatus('ready');
          setProgress(100);
          
          // Hide the banner after a few seconds of being ready
          setTimeout(() => {
            if (isMounted) setStatus('initializing'); // We reuse 'initializing' as 'hidden' state
          }, 3000);
        }
      } catch (err) {
        console.error('Failed to preload AI model', err);
        if (isMounted) setStatus('error');
      }
    };

    initModel();

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === 'initializing') return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out transform ${status === 'ready' ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
      <div className="bg-bg-card border border-border-subtle shadow-xl rounded-2xl p-4 w-72 sm:w-80 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${status === 'ready' ? 'bg-green-100 dark:bg-green-900/30 text-green-500' : 'bg-lime-100 dark:bg-lime-900/30 text-lime-600'}`}>
            {status === 'ready' ? <CheckCircle size={20} /> : <BrainCircuit size={20} className={status === 'downloading' ? 'animate-pulse' : ''} />}
          </div>
          <div className="flex flex-col flex-1">
            <h4 className="text-sm font-bold text-text-main">
              {status === 'ready' ? 'AI Model Ready' : 'Downloading AI Model'}
            </h4>
            <p className="text-[10px] text-text-muted font-medium">
              {status === 'ready' ? 'Cached in browser for fast use.' : 'This only happens once.'}
            </p>
          </div>
          {status === 'downloading' && (
            <div className="text-xs font-bold text-lime-600">
              {progress}%
            </div>
          )}
        </div>
        
        {status === 'downloading' && (
          <div className="w-full h-1.5 bg-bg-input rounded-full overflow-hidden">
            <div 
              className="h-full bg-lime-500 transition-all duration-300 ease-out" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        )}
      </div>
    </div>
  );
}
