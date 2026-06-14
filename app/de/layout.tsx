import React from 'react';
import Link from 'next/link';

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="german-layout">
      {/* German Specific Navigation */}
      <nav className="w-full p-4 border-b border-slate-200 text-center font-bold text-slate-800">
        Navigation (DE)
      </nav>
      
      {/* Page Content */}
      <div className="min-h-screen">
        {children}
      </div>

      {/* German Specific Footer */}
      <footer className="w-full p-6 bg-slate-50 text-center text-slate-500 text-sm mt-auto border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/de/anleitung" className="hover:text-slate-800 transition-colors">Anleitung</Link>
          <Link href="/de/kontakt" className="hover:text-slate-800 transition-colors">Kontakt</Link>
          <Link href="/de/agb" className="hover:text-slate-800 transition-colors">AGB</Link>
          <Link href="/de/datenschutz" className="hover:text-slate-800 transition-colors">Datenschutz</Link>
        </div>
        <div>Image Editor Studio &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}
