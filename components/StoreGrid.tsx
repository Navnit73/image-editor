"use client";

import React, { useState } from "react";

interface StoreCardProps {
  title: string;
  category: string;
  price: string;
  badge?: string;
  imageBg: string;
}

export function StoreCard({ title, category, price, badge, imageBg }: StoreCardProps) {
  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[18px] p-6 flex flex-col justify-between h-full apple-active-scale cursor-pointer group">
      <div>
        <div className={`w-full aspect-square rounded-[8px] mb-6 flex items-center justify-center p-6 ${imageBg}`}>
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/90 font-tagline text-[21px] shadow-sm">
            
          </div>
        </div>
        {badge && (
          <span className="font-caption text-[12px] font-semibold text-[#0066cc] uppercase tracking-wider mb-1 block">
            {badge}
          </span>
        )}
        <span className="font-caption text-[14px] text-[#7a7a7a] block mb-1">
          {category}
        </span>
        <h3 className="font-body-strong text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors mb-2">
          {title}
        </h3>
      </div>
      <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
        <span className="font-body text-[17px] text-[#1d1d1f]">
          {price}
        </span>
        <span className="text-[#0066cc] font-body text-[17px] group-hover:translate-x-0.5 transition-transform">
          Buy &gt;
        </span>
      </div>
    </div>
  );
}

export function ConfiguratorSection() {
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [selectedColor, setSelectedColor] = useState("Natural Titanium");

  const storageOptions = [
    { label: "128GB", price: "From $999" },
    { label: "256GB", price: "From $1099" },
    { label: "512GB", price: "From $1299" },
    { label: "1TB", price: "From $1499" },
  ];

  const colorOptions = [
    { name: "Natural Titanium", bg: "bg-[#8f8a81]" },
    { name: "Desert Titanium", bg: "bg-[#c2b49b]" },
    { name: "White Titanium", bg: "bg-[#e3e4e5]" },
    { name: "Black Titanium", bg: "bg-[#35363a]" },
  ];

  return (
    <div className="w-full max-w-[1024px] mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold tracking-wider uppercase block mb-2">
          Interactive Configurator
        </span>
        <h2 className="font-display-lg text-[40px] font-semibold text-[#1d1d1f] mb-3">
          Configure your iPhone 17 Pro.
        </h2>
        <p className="font-body text-[17px] text-[#7a7a7a]">
          Select model storage and titanium finish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Interactive Phone Render */}
        <div className="bg-[#f5f5f7] rounded-[24px] p-12 flex flex-col items-center justify-center min-h-[420px] relative">
          <div className="w-[180px] h-[340px] product-shadow rounded-[36px] border-4 border-[#3a3a3c] bg-slate-900 flex flex-col items-center justify-between p-4 text-white relative">
            {/* Dynamic Color Indicator */}
            <div className="w-full flex justify-between items-center text-xs opacity-70">
              <span>Dynamic Island</span>
              <span>5G</span>
            </div>
            <div className="text-center my-auto">
              <div className="font-tagline text-[21px] font-semibold mb-1">
                {selectedStorage}
              </div>
              <div className="font-caption text-[14px] text-white/70">
                {selectedColor}
              </div>
            </div>
            <div className="w-16 h-1 bg-white/40 rounded-full mb-1" />
          </div>
        </div>

        {/* Right Options selector */}
        <div className="space-y-8">
          {/* Finish selector */}
          <div>
            <label className="font-body-strong text-[17px] block mb-3 text-[#1d1d1f]">
              Finish. <span className="font-normal text-[#7a7a7a]">Pick a color.</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {colorOptions.map((color) => {
                const isSelected = selectedColor === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`btn-apple-pearl-capsule w-full flex items-center justify-start gap-3 p-3 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#0071e3] ring-2 ring-[#0071e3]/20 bg-white"
                        : "border-[#e0e0e0] bg-[#fafafc]"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full ${color.bg} shadow-inner inline-block`} />
                    <span className="font-caption text-[14px] text-[#1d1d1f]">
                      {color.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Storage selector */}
          <div>
            <label className="font-body-strong text-[17px] block mb-3 text-[#1d1d1f]">
              Storage. <span className="font-normal text-[#7a7a7a]">How much space do you need?</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {storageOptions.map((opt) => {
                const isSelected = selectedStorage === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setSelectedStorage(opt.label)}
                    className={`w-full p-4 rounded-full border transition-all flex flex-col items-center justify-center cursor-pointer ${
                      isSelected
                        ? "border-[#0071e3] ring-2 ring-[#0071e3]/20 bg-white"
                        : "border-[#e0e0e0] bg-[#fafafc]"
                    }`}
                  >
                    <span className="font-body-strong text-[17px] text-[#1d1d1f]">
                      {opt.label}
                    </span>
                    <span className="font-caption text-[12px] text-[#7a7a7a]">
                      {opt.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
