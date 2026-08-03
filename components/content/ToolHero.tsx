"use client";

import React from "react";

interface ToolHeroProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCtaText?: string;
}

export function ToolHero({
  badge,
  headline,
  subheadline,
  primaryCtaText = "Start Editing",
}: ToolHeroProps) {
  return (
    <section className="w-full bg-[#f5f5f7] text-[#1d1d1f] py-[64px] md:py-[80px] px-6 text-center border-b border-[#e0e0e0]">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        {badge && (
          <span className="font-caption text-[14px] text-[#0066cc] font-semibold uppercase tracking-wider mb-2 inline-block bg-[#0066cc]/10 px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <h1 className="font-hero-display text-[38px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.28px] leading-[1.07] text-[#1d1d1f] mb-4">
          {headline}
        </h1>
        <p className="font-lead text-[20px] md:text-[24px] font-normal tracking-[0.196px] text-[#7a7a7a] max-w-[640px] mb-8 leading-[1.4]">
          {subheadline}
        </p>

        <a href="#editor-container" className="btn-apple-primary font-body text-[17px] py-3 px-7">
          {primaryCtaText}
        </a>
      </div>
    </section>
  );
}
