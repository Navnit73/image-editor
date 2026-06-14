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
  
        <EditorHeader />

        {/* Mobile: stack vertically; Desktop: side-by-side */}
        <div className="flex flex-col mt-3 lg:flex-row flex-1 p-1 sm:p-2 gap-3 sm:gap-4 overflow-hidden">
          {/* Settings sidebar — scrollable on mobile, fixed on desktop */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 overflow-y-auto lg:overflow-visible">
            <SettingsSidebar />
          </div>

          {/* Main canvas — grows to fill */}
          <div className="flex-1 min-h-[320px] sm:min-h-[400px] lg:min-h-0">
            <OriginalWorkspace />
          </div>

          {/* Live preview — bottom on mobile, right column on desktop */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <LivePreview />
          </div>
        </div>
     
    </EditorProvider>
  );
}