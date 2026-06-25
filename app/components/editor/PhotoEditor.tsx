'use client';

import React from 'react';
import { EditorProvider, useEditor } from './EditorContext';
import EditorHeader from './EditorHeader';
import SettingsSidebar from './SettingsSidebar';
import OriginalWorkspace from './OriginalWorkspace';
import LivePreview from './LivePreview';

function EditorContent() {
  const { imageFile } = useEditor();

  if (!imageFile) {
    return (
      <div className="w-full flex justify-center py-10">
        <div className="w-full max-w-3xl h-[400px] flex flex-col">
          <OriginalWorkspace />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl border border-white/60 dark:border-slate-800/60 rounded-[2rem] shadow-2xl overflow-hidden w-full h-[calc(100vh-60px)] min-h-[600px] transition-all duration-500 relative ring-1 ring-slate-200/50 dark:ring-white/5 animate-fade-in-up">
      
      {/* Integrated Header */}
      <div className="flex-shrink-0 z-10 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-950/30">
        <EditorHeader />
      </div>

      {/* Editor Body */}
      <div className="flex flex-col lg:flex-row flex-1 p-2 sm:p-3 xl:p-4 gap-2 sm:gap-3 xl:gap-4 overflow-hidden relative z-0">
        
        {/* Left Column: Settings Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 flex flex-col order-3 lg:order-1 h-[40vh] lg:h-full overflow-hidden">
          <SettingsSidebar />
        </div>

        {/* Center/Right Column: Canvas & Preview split */}
        <div className="flex-1 flex flex-col xl:flex-row gap-2 sm:gap-3 xl:gap-4 overflow-hidden order-1 lg:order-2">
           
           {/* Canvas */}
           <div className="flex-1 min-h-[300px] h-full flex flex-col overflow-hidden relative">
             <OriginalWorkspace />
           </div>

           {/* Preview - beside Canvas on XL, below Canvas on LG */}
           <div className="w-full xl:w-[380px] 2xl:w-[450px] flex-shrink-0 flex flex-col h-[250px] xl:h-full overflow-hidden">
             <LivePreview />
           </div>
           
        </div>

      </div>
    </div>
  );
}

export default function PhotoEditor() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  );
}