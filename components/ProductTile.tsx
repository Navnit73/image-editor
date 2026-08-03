"use client";

import React from "react";

interface ProductTileProps {
  variant?: "light" | "parchment" | "dark" | "dark-2";
  title: string;
  tagline: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  badge?: string;
  imageSvg?: React.ReactNode;
}

export function ProductTile({
  variant = "light",
  title,
  tagline,
  primaryCtaText = "Buy",
  secondaryCtaText = "Learn more",
  badge,
  imageSvg,
}: ProductTileProps) {
  // Theme styling mapping
  const bgClass =
    variant === "dark"
      ? "bg-[#272729] text-white"
      : variant === "dark-2"
      ? "bg-[#2a2a2c] text-white"
      : variant === "parchment"
      ? "bg-[#f5f5f7] text-[#1d1d1f]"
      : "bg-white text-[#1d1d1f]";

  const linkColorClass =
    variant === "dark" || variant === "dark-2"
      ? "text-[#2997ff] hover:underline"
      : "text-[#0066cc] hover:underline";

  return (
    <section className={`w-full py-[80px] px-6 flex flex-col items-center justify-between text-center overflow-hidden min-h-[680px] relative ${bgClass}`}>
      {/* Content Stack */}
      <div className="max-w-[800px] flex flex-col items-center z-10">
        {badge && (
          <span className="font-caption text-[14px] text-[#7a7a7a] font-normal mb-2 uppercase tracking-wide">
            {badge}
          </span>
        )}
        <h2 className="font-hero-display text-[40px] md:text-[56px] font-semibold tracking-[-0.28px] leading-[1.07] mb-3">
          {title}
        </h2>
        <p className="font-lead text-[21px] md:text-[28px] font-normal tracking-[0.196px] max-w-[600px] mb-6 opacity-90">
          {tagline}
        </p>

        {/* CTA Pair Grammar */}
        <div className="flex items-center gap-4">
          <button className="btn-apple-primary font-body text-[17px]">
            {primaryCtaText}
          </button>
          {secondaryCtaText && (
            <a href="#" className={`font-body text-[17px] ${linkColorClass}`}>
              {secondaryCtaText} &gt;
            </a>
          )}
        </div>
      </div>

      {/* Product Image Container with Signature Drop Shadow */}
      <div className="mt-12 w-full max-w-[900px] flex justify-center items-center">
        {imageSvg ? (
          <div className="product-shadow rounded-2xl overflow-hidden bg-transparent">
            {imageSvg}
          </div>
        ) : (
          <div className="w-[320px] md:w-[480px] h-[300px] md:h-[400px] product-shadow rounded-[32px] bg-gradient-to-b from-slate-800 to-black flex items-center justify-center p-8 border border-white/10">
            <div className="text-center text-white/80">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-current rounded-full flex items-center justify-center opacity-80">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <span className="font-tagline text-[21px]">Apple Precision Hardware</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
