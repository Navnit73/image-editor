import React from "react";
import PhotoEditor from "./components/editor/PhotoEditor";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-zinc-950 p-4 md:p-8 font-sans">
      <main className="max-w-[1400px] mx-auto">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Image Editor Studio
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A fast, responsive, and easy-to-use photo editor built with Next.js, Konva, and Tailwind CSS.
          </p>
        </header>

        <PhotoEditor />
      </main>
    </div>
  );
}
