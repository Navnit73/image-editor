import React, { useEffect, useState } from 'react';
import { useEditor } from './EditorContext';
import { RefreshCcw, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function EditorHeader() {
  const { reset, imageFile } = useEditor();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-between w-full p-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 rounded-t-xl">
      <div className="flex items-center gap-6">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Edit Image</h2>
        <button
          onClick={reset}
          disabled={!imageFile}
          className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <RefreshCcw size={16} />
          Reset
        </button>
      </div>

      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      )}
    </header>
  );
}
