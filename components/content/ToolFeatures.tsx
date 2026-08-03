"use client";

import React from "react";
import { Zap, ShieldCheck, Sparkles, Layers } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface ToolFeaturesProps {
  features?: Feature[];
}

export function ToolFeatures({ features }: ToolFeaturesProps) {
  if (!features || features.length === 0) return null;

  const defaultIcons = [Zap, ShieldCheck, Sparkles, Layers];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-[1024px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold tracking-wider uppercase block mb-2">
            Why Use Our Tool
          </span>
          <h2 className="font-display-lg text-[34px] md:text-[40px] font-semibold text-[#1d1d1f]">
            Engineered for speed, privacy, and precision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComponent = defaultIcons[idx % defaultIcons.length];
            return (
              <div
                key={item.title}
                className="bg-[#fafafc] border border-[#e0e0e0] rounded-[18px] p-6 flex flex-col justify-between apple-active-scale cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-body-strong text-[17px] font-semibold text-[#1d1d1f] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] text-[#7a7a7a] leading-[1.47]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
