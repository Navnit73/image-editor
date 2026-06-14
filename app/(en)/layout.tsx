import React from 'react';
import Link from 'next/link';
import SiteHeader from './SiteHeader';

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="en-layout">
      {/* English Specific Navigation */}
      <SiteHeader />
      
      {/* Page Content */}
      <div className="min-h-screen">
        {children}
      </div>

      {/* English Specific Footer */}
      <footer className="w-full p-6 bg-slate-50 text-center text-slate-500 text-sm mt-auto border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/how-to-use" className="hover:text-slate-800 transition-colors">How to Use</Link>
          <Link href="/contact" className="hover:text-slate-800 transition-colors">Contact</Link>
          <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
        </div>
        <div>Image Editor Studio &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}
