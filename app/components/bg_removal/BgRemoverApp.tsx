'use client';

import React from 'react';
import { BgRemovalProvider } from './BgRemovalContext';
import BgRemoverHeader from './BgRemoverHeader';
import BgRemoverWorkspace from './BgRemoverWorkspace';

export default function BgRemoverApp() {
  return (
    <BgRemovalProvider>
      <div className="w-full flex flex-col bg-bg-card rounded-2xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/40 border border-border-subtle h-[calc(100vh-140px)] min-h-[500px] transition-colors duration-300">
        <BgRemoverHeader />
        <BgRemoverWorkspace />
      </div>
    </BgRemovalProvider>
  );
}
