"use client";

import React from "react";

export function FloatingStickyBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[800px] h-[64px] frosted-glass rounded-full border border-[#000000]/10 shadow-lg px-6 flex items-center justify-between">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="font-body-strong text-[17px] text-[#1d1d1f]">
          iPhone 17 Pro
        </span>
        <span className="font-body text-[14px] text-[#7a7a7a]">
          From $999 or $41.62/mo. for 24 mo.
        </span>
      </div>
      <button className="btn-apple-primary py-2 px-5 text-[15px]">
        Add to Bag
      </button>
    </div>
  );
}
