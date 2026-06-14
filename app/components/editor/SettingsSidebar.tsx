'use client';

import React from 'react';
import { useEditor, ImageFormat } from './EditorContext';
import { Maximize2, SlidersHorizontal, RotateCcw, RotateCw } from 'lucide-react';

export default function SettingsSidebar() {
  const {
    width,
    height,
    originalWidth,
    originalHeight,
    setWidth,
    setHeight,
    format,
    setFormat,
    quality,
    setQuality,
    backgroundColor,
    setBackgroundColor,
    rotation,
    setRotation,
    imageFile,
  } = useEditor();

  const handlePercentageClick = (percentage: number) => {
    setWidth(Math.round(originalWidth * (percentage / 100)));
    setHeight(Math.round(originalHeight * (percentage / 100)));
  };

  const disabled = !imageFile;

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col gap-8">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">Settings</h3>

        {/* Dimensions */}
        <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          <Maximize2 size={16} className="text-indigo-500" />
          Dimensions
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="text-xs text-zinc-500 mb-1 block">Width (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              disabled={disabled}
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2 text-sm disabled:opacity-50"
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-zinc-500 mb-1 block">Height (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              disabled={disabled}
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2 text-sm disabled:opacity-50"
            />
          </div>
        </div>
        <div className="flex gap-2">
          {[25, 50, 75, 100].map((pct) => (
            <button
              key={pct}
              onClick={() => handlePercentageClick(pct)}
              disabled={disabled}
              className="flex-1 py-1.5 text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md disabled:opacity-50 transition-colors"
            >
              {pct}%
            </button>
          ))}
        </div>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* Format & Quality */}
      <div>
        <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          <SlidersHorizontal size={16} className="text-indigo-500" />
          Format & Quality
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-zinc-500 mb-2">
            <span>Compression Image Quality</span>
            <span className="font-semibold">{quality}%</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            disabled={disabled}
            className="w-full accent-indigo-500 disabled:opacity-50"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="text-xs text-zinc-500 mb-1 block">Format</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as ImageFormat)}
              disabled={disabled}
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2 text-sm disabled:opacity-50"
            >
              <option value="image/jpeg">JPG</option>
              <option value="image/jpeg">JPEG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WEBP</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-xs text-zinc-500 mb-1 block">Rotate</label>
            <div className="flex gap-2">
              <button
                onClick={() => setRotation((rotation - 90) % 360)}
                disabled={disabled}
                className="flex-1 flex justify-center items-center py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-md disabled:opacity-50 transition-colors"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setRotation((rotation + 90) % 360)}
                disabled={disabled}
                className="flex-1 flex justify-center items-center py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-md disabled:opacity-50 transition-colors"
              >
                <RotateCw size={16} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs text-zinc-500 mb-2 block flex items-center gap-2">
            <span className="material-icons text-sm">Background Color</span>
          </label>
          <div className="flex gap-2">
            {['transparent', '#ffffff', '#000000', '#ef4444', '#6366f1'].map((color) => (
              <button
                key={color}
                onClick={() => setBackgroundColor(color)}
                disabled={disabled}
                className={`w-8 h-8 rounded-full border-2 disabled:opacity-50 transition-all ${
                  backgroundColor === color ? 'border-indigo-500 scale-110' : 'border-zinc-200 dark:border-zinc-700'
                }`}
                style={{
                  backgroundColor: color === 'transparent' ? '#f4f4f5' : color,
                  backgroundImage: color === 'transparent' ? 'linear-gradient(45deg, #e4e4e7 25%, transparent 25%), linear-gradient(-45deg, #e4e4e7 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e4e4e7 75%), linear-gradient(-45deg, transparent 75%, #e4e4e7 75%)' : 'none',
                  backgroundSize: color === 'transparent' ? '10px 10px' : 'auto',
                  backgroundPosition: color === 'transparent' ? '0 0, 0 5px, 5px -5px, -5px 0' : 'auto'
                }}
                title={color === 'transparent' ? 'Transparent' : color}
              />
            ))}
          </div>
          <p className="text-[10px] text-zinc-400 mt-2 leading-relaxed">
            Used when rotating, or when saving a transparent image as JPEG.
          </p>
        </div>
      </div>
    </aside>
  );
}
