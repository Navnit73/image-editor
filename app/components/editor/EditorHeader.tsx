'use client';

import React, { useEffect, useState } from 'react';
import { useEditor } from './EditorContext';
import { RefreshCcw, Sun, Moon, ImageIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function EditorHeader() {
  const { reset, imageFile } = useEditor();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-between w-full px-4 py-3 sm:px-6 sm:py-4 bg-bg-card border-b border-border-subtle transition-colors duration-300">
      <div className="flex items-center gap-3 sm:gap-6">
       

        {imageFile && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-muted hover:text-text-main transition-all px-2 py-1 rounded-md hover:bg-bg-input active:scale-95"
          >
            <RefreshCcw size={13} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-bg-input text-text-muted hover:text-text-main transition-all active:scale-90"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      )}
    </header>
  );
}