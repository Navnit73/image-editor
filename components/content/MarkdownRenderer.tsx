"use client";

import React from "react";

interface MarkdownRendererProps {
  contentHtml: string;
}

export function MarkdownRenderer({ contentHtml }: MarkdownRendererProps) {
  if (!contentHtml) return null;

  return (
    <article className="w-full py-16 px-6 bg-[#f5f5f7]">
      <div className="max-w-[800px] mx-auto prose prose-neutral prose-lg max-w-none text-[#1d1d1f] font-body">
        {/* Render markdown lines cleanly with styled headers and paragraphs */}
        {contentHtml.split("\n\n").map((chunk, idx) => {
          const trimmed = chunk.trim();
          if (trimmed.startsWith("# ")) {
            return (
              <h1 key={idx} className="font-display-lg text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mt-8 mb-4">
                {trimmed.replace(/^# /, "")}
              </h1>
            );
          }
          if (trimmed.startsWith("### ")) {
            return (
              <h3 key={idx} className="font-tagline text-[21px] font-semibold text-[#1d1d1f] mt-6 mb-3">
                {trimmed.replace(/^### /, "")}
              </h3>
            );
          }
          if (trimmed.startsWith("- ")) {
            const listItems = trimmed.split("\n").map((item) => item.replace(/^- /, ""));
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 text-[17px] text-[#1d1d1f] my-4 leading-[1.47]">
                {listItems.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="font-body text-[17px] text-[#1d1d1f] leading-[1.47] mb-6">
              {trimmed}
            </p>
          );
        })}
      </div>
    </article>
  );
}
