'use client';

import React from 'react';
import { useBgRemoval } from './BgRemovalContext';
import { Palette, FileImage, RotateCcw } from 'lucide-react';

const COLORS = [
  { label: 'Transparent', value: 'transparent', hex: 'transparent' },
  { label: 'White', value: 'white', hex: '#ffffff' },
  { label: 'Black', value: 'black', hex: '#000000' },
  { label: 'Red', value: 'red', hex: '#ef4444' },
  { label: 'Blue', value: 'blue', hex: '#3b82f6' },
  { label: 'Green', value: 'green', hex: '#22c55e' },
];

export default function BgRemoverSidebar() {
  const { backgroundColor, setBackgroundColor, exportFormat, setExportFormat, clearAll } = useBgRemoval();

  return (
    <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 bg-bg-card border-t lg:border-t-0 lg:border-r border-border-subtle flex flex-col h-auto lg:h-full lg:overflow-y-auto">
      <div className="p-4 sm:p-6 flex flex-col gap-8">
        
        {/* Background Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Palette size={16} className="text-text-muted" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Background</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {COLORS.map((c) => (
              <button
                key={c.value}
                onClick={() => setBackgroundColor(c.value)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold transition-all ${
                  backgroundColor === c.value
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 shadow-sm'
                    : 'border-border-subtle hover:border-text-muted bg-bg-root text-text-main'
                }`}
              >
                <div 
                  className={`w-4 h-4 rounded-full border border-border-subtle flex-shrink-0 ${c.value === 'transparent' ? 'bg-checkerboard' : ''}`}
                  style={c.value !== 'transparent' ? { backgroundColor: c.hex } : {
                    backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                    backgroundSize: '8px 8px',
                    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
                  }}
                />
                {c.label}
              </button>
            ))}
            
            {/* Custom Color Button */}
            <label className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold cursor-pointer transition-all ${
              !COLORS.find(c => c.value === backgroundColor)
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 shadow-sm'
                : 'border-border-subtle hover:border-text-muted bg-bg-root text-text-main'
            }`}>
              <div 
                className="w-4 h-4 rounded-full border border-border-subtle flex-shrink-0"
                style={{ backgroundColor: !COLORS.find(c => c.value === backgroundColor) ? backgroundColor : '#6366f1' }}
              />
              <span className="flex-1 text-left">Custom</span>
              <input 
                type="color" 
                value={!COLORS.find(c => c.value === backgroundColor) ? backgroundColor : '#6366f1'} 
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-0 h-0 opacity-0 absolute"
              />
            </label>
          </div>
        </section>

        {/* Format Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <FileImage size={16} className="text-text-muted" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Format</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setExportFormat('image/png')}
              className={`flex flex-col items-start px-3 py-2.5 rounded-xl border transition-all text-left ${
                exportFormat === 'image/png'
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 shadow-sm'
                  : 'border-border-subtle hover:border-text-muted bg-bg-root'
              }`}
            >
              <span className={`text-sm font-bold ${exportFormat === 'image/png' ? 'text-indigo-700 dark:text-indigo-300' : 'text-text-main'}`}>PNG</span>
              <span className="text-[10px] text-text-muted mt-0.5">Lossless, transparency</span>
            </button>
            
            <button
              onClick={() => setExportFormat('image/webp')}
              className={`flex flex-col items-start px-3 py-2.5 rounded-xl border transition-all text-left ${
                exportFormat === 'image/webp'
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 shadow-sm'
                  : 'border-border-subtle hover:border-text-muted bg-bg-root'
              }`}
            >
              <span className={`text-sm font-bold ${exportFormat === 'image/webp' ? 'text-indigo-700 dark:text-indigo-300' : 'text-text-main'}`}>WEBP</span>
              <span className="text-[10px] text-text-muted mt-0.5">Smaller file size</span>
            </button>
          </div>
        </section>

        <hr className="border-border-subtle" />

        <button
          onClick={clearAll}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-border-subtle text-text-main font-semibold text-sm hover:bg-bg-root transition-colors"
        >
          <RotateCcw size={16} />
          Start over
        </button>

      </div>
    </div>
  );
}
