'use client';

import React from 'react';
import { EditorProvider, useEditor } from './EditorContext';
import EditorHeader from './EditorHeader';
import SettingsSidebar from './SettingsSidebar';
import OriginalWorkspace from './OriginalWorkspace';
import LivePreview from './LivePreview';

function EditorContent() {
  const { imageFile } = useEditor();

  return (
    <>
      <EditorHeader />

      {/* Mobile: stack vertically; Desktop: side-by-side */}
      <div className="flex flex-col mt-3 lg:flex-row flex-1 p-1 sm:p-2 gap-3 sm:gap-4 overflow-hidden">
        {/* Settings sidebar — scrollable on mobile, fixed on desktop */}
        {imageFile && (
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 overflow-y-auto lg:overflow-visible order-3 lg:order-none">
            <SettingsSidebar />
          </div>
        )}

        {/* Main canvas — grows to fill, moves to top on mobile */}
        <div className={`flex-1 min-h-[320px] sm:min-h-[400px] lg:min-h-0 order-1 lg:order-none ${!imageFile ? 'flex justify-center items-center h-full' : ''}`}>
          <div className={!imageFile ? 'w-full max-w-3xl h-full flex flex-col' : 'w-full h-full flex flex-col'}>
            <OriginalWorkspace />
          </div>
        </div>

        {/* Live preview — below canvas on mobile, right column on desktop */}
        {imageFile && (
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 order-2 lg:order-none">
            <LivePreview />
          </div>
        )}
      </div>
    </>
  );
}

export default function PhotoEditor() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  );
}