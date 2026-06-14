'use client';

import React, { useEffect, useState } from 'react';
import { useEditor } from './EditorContext';
import { RefreshCcw, Sun, Moon, Undo2, Redo2 } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function EditorHeader() {
  const { reset, imageFile, undo, redo, canUndo, canRedo, fileName, setFileName } = useEditor();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center rounded-2xl justify-between w-full px-4 h-14 bg-lime-600 dark:bg-lime-950 border-b border-lime-700 dark:border-lime-900 transition-colors duration-300">
      
      {/* LEFT: Actions */}
      <div className="flex items-center gap-2 sm:gap-3 w-1/3">
        {imageFile && (
          <>
            <div className="flex items-center bg-white/10 rounded-lg border border-white/20 p-0.5 shadow-sm">
              <button
                onClick={undo}
                disabled={!canUndo}
                className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Undo (Ctrl+Z)"
              >
                <Undo2 size={15} />
              </button>
              <div className="w-[1px] h-3.5 bg-white/20 mx-0.5" />
              <button
                onClick={redo}
                disabled={!canRedo}
                className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                title="Redo (Ctrl+Y)"
              >
                <Redo2 size={15} />
              </button>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all px-2.5 py-1.5 rounded-lg border border-transparent hover:border-white/20"
            >
              <RefreshCcw size={13} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </>
        )}
      </div>

      {/* CENTER: File Name */}
      <div className="flex justify-center w-1/3">
        {imageFile && (
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="bg-transparent hover:bg-white/10 focus:bg-white/10 border border-transparent focus:border-white/30 text-xs sm:text-sm font-bold text-white placeholder-white/50 text-center rounded-md px-2 py-1.5 focus:outline-none transition-all w-24 sm:w-48 truncate"
            placeholder="Untitled"
          />
        )}
      </div>

      {/* RIGHT: Theme Toggle */}
      <div className="flex items-center justify-end w-1/3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white/90 hover:text-white transition-all active:scale-95 shadow-sm"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        )}
      </div>
    </header>
  );
}