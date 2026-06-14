'use client';

import React from 'react';
import { BgRemovalProvider, useBgRemoval } from './BgRemovalContext';
import BgRemoverHeader from './BgRemoverHeader';
import BgRemoverWorkspace from './BgRemoverWorkspace';
import BgRemoverSidebar from './BgRemoverSidebar';

function BgRemoverLayout() {
  const { jobs } = useBgRemoval();
  
  return (
    <div className="w-full flex flex-col bg-bg-card rounded-2xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/40 border border-border-subtle h-auto lg:h-[calc(100vh-140px)] min-h-[600px] transition-colors duration-300">
      <BgRemoverHeader />
      
      <div className="flex-1 flex flex-col-reverse lg:flex-row min-h-0">
        {jobs.length > 0 && <BgRemoverSidebar />}
        <BgRemoverWorkspace />
      </div>
    </div>
  );
}

export default function BgRemoverApp() {
  return (
    <BgRemovalProvider>
      <BgRemoverLayout />
    </BgRemovalProvider>
  );
}
