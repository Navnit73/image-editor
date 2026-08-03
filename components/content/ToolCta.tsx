"use client";

import React from "react";

interface CtaProps {
  cta?: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export function ToolCta({ cta }: CtaProps) {
  if (!cta) return null;

  return (
    <section className="w-full py-20 px-6 bg-[#272729] text-white flex flex-col items-center text-center">
      <div className="max-w-[720px] flex flex-col items-center">
        <h2 className="font-display-lg text-[36px] md:text-[48px] font-semibold leading-[1.1] mb-4">
          {cta.title}
        </h2>
        <p className="font-lead text-[20px] md:text-[24px] font-normal text-white/80 max-w-[580px] mb-8">
          {cta.description}
        </p>

        <a href="#editor-container" className="btn-apple-primary font-body text-[17px] py-3 px-8">
          {cta.buttonText}
        </a>
      </div>
    </section>
  );
}
