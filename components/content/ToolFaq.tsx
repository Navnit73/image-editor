"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ToolFaqProps {
  faq?: FaqItem[];
}

export function ToolFaq({ faq }: ToolFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="w-full py-16 px-6 bg-[#f5f5f7] border-t border-[#e0e0e0]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold tracking-wider uppercase block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="font-display-lg text-[34px] md:text-[40px] font-semibold text-[#1d1d1f]">
            Got questions? We have answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white border border-[#e0e0e0] rounded-[18px] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between font-body-strong text-[17px] font-semibold text-[#1d1d1f] cursor-pointer hover:text-[#0066cc] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7a7a7a] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0066cc]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-body text-[16px] text-[#7a7a7a] leading-[1.5] border-t border-[#f0f0f0] mt-2 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
