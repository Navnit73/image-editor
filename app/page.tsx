"use client";

import React, { useState } from "react";
import PhotoEditor from "./components/editor/PhotoEditor";
import BgRemoverApp from "./components/bg_removal/BgRemoverApp";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'editor' | 'bg_remover'>('editor');

  return (
    <div className="min-h-screen bg-bg-root p-4 md:p-8 font-sans transition-colors duration-300">
      <main className="max-w-[1400px] mx-auto">
        <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-text-main">
              Image Editor Studio
            </h1>
            <p className="mt-2 text-text-muted">
              Professional, fully responsive tools built with Next.js and Tailwind CSS.
            </p>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex p-1 bg-bg-card rounded-xl border border-border-subtle shadow-sm w-full md:w-auto self-start">
            <button
              onClick={() => setActiveTab('editor')}
              className={`flex-1 md:w-36 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'editor'
                  ? 'bg-accent-main text-white shadow-md'
                  : 'text-text-muted hover:text-text-main hover:bg-bg-input'
              }`}
            >
              Photo Editor
            </button>
            <button
              onClick={() => setActiveTab('bg_remover')}
              className={`flex-1 md:w-44 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'bg_remover'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md'
                  : 'text-text-muted hover:text-text-main hover:bg-bg-input'
              }`}
            >
              Bulk BG Remover
            </button>
          </div>
        </header>

        <div className={activeTab === 'editor' ? 'block' : 'hidden'}>
          <PhotoEditor />
        </div>
        <div className={activeTab === 'bg_remover' ? 'block' : 'hidden'}>
          <BgRemoverApp />
        </div>
      </main>
    </div>
  );
}
