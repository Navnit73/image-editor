import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | photoresizerai.com",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] flex flex-col items-center justify-center p-6 text-center font-body">
      <div className="max-w-[600px] bg-white border border-[#e0e0e0] rounded-[24px] p-10 shadow-sm">
        <span className="font-caption text-[14px] text-[#0066cc] font-semibold uppercase tracking-wider block mb-3">
          404 Error
        </span>
        <h1 className="font-display-lg text-[36px] font-semibold mb-4 text-[#1d1d1f]">
          Page Not Found
        </h1>
        <p className="font-body text-[17px] text-[#7a7a7a] mb-8 leading-[1.45]">
          The photo editing tool or page you requested could not be found. Return to our homepage to access all free image tools.
        </p>
        <Link
          href="/en"
          className="btn-apple-primary font-body text-[17px] py-3 px-8 inline-block text-white text-decoration-none"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
