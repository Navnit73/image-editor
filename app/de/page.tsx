import React from 'react';
import Link from 'next/link';

export default function GermanHomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Willkommen auf unserer deutschen Seite</h1>
      <p className="mb-8">Hier finden Sie alle unsere SEO-Tools.</p>
      <div className="flex gap-4">
        <Link href="/de/foto-groesse-aendern" className="text-blue-500 hover:underline">Foto Größe Ändern</Link>
        <Link href="/de/passfoto-ersteller" className="text-blue-500 hover:underline">Passfoto Ersteller</Link>
      </div>
    </div>
  );
}
