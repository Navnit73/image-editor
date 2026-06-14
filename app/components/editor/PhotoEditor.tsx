'use client';

import React from 'react';
import { EditorProvider } from './EditorContext';
import EditorHeader from './EditorHeader';
import SettingsSidebar from './SettingsSidebar';
import OriginalWorkspace from './OriginalWorkspace';
import LivePreview from './LivePreview';

export default function PhotoEditor() {
  return (
    <EditorProvider>
      <div className="w-full max-w-7xl mx-auto flex flex-col min-h-[800px] bg-zinc-100 dark:bg-black rounded-xl overflow-hidden shadow-2xl">
        <EditorHeader />
        
        <div className="flex flex-col lg:flex-row flex-1 p-4 gap-4 overflow-hidden">
          <SettingsSidebar />
          <OriginalWorkspace />
          <LivePreview />
        </div>
      </div>
    </EditorProvider>
  );
}
