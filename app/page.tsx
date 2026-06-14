import React from "react";
import PhotoEditor from "./components/editor/PhotoEditor";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-root p-4 md:p-8 font-sans transition-colors duration-300">
      <main className="max-w-[1400px] mx-auto">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-text-main">
            Image Editor Studio
          </h1>
          <p className="mt-2 text-text-muted">
            A professional, fully responsive photo editor built with Next.js and Tailwind CSS.
          </p>
        </header>

        <PhotoEditor />
      </main>
    </div>
  );
}
