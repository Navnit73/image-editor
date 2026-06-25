'use client';

import React from 'react';
import { BgRemovalProvider, useBgRemoval } from './BgRemovalContext';
import BgRemoverHeader from './BgRemoverHeader';
import BgRemoverWorkspace from './BgRemoverWorkspace';
import BgRemoverSidebar from './BgRemoverSidebar';

function BgRemoverLayout() {
  const { jobs } = useBgRemoval();

  return (
    <div className="w-full flex flex-col bg-white dark:bg-slate-900 rounded-none sm:rounded-2xl overflow-hidden border-0 sm:border border-slate-200 dark:border-slate-800 h-[100dvh] sm:h-[calc(100vh-64px)] sm:min-h-[600px] sm:max-h-[900px] transition-colors duration-200">
      <BgRemoverHeader />

      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        {/* Workspace takes priority on mobile — sidebar goes below on mobile, right on desktop */}
        <BgRemoverWorkspace />
        {jobs.length > 0 && <BgRemoverSidebar />}
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