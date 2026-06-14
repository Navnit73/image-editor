"use client";

import React, { useState } from "react";
import Link from "next/link";
import PhotoEditor from "../components/editor/PhotoEditor";
import BgRemoverApp from "../components/bg_removal/BgRemoverApp";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'editor' | 'bg_remover'>('editor');

  return (
    <div className="min-h-screen bg-bg-root p-4 md:p-8 font-sans transition-colors duration-300">
      <main className="max-w-[1400px] mx-auto">
        <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-text-main">
              Free Online photoresizerai
            </h1>
            <p className="mt-2 text-text-muted">
              Professional, fast, and fully local photo editing right in your browser. No uploads, 100% private.
            </p>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex p-1 bg-bg-card rounded-xl border border-border-subtle shadow-sm w-full md:w-auto self-start">
            <button
              onClick={() => setActiveTab('editor')}
              className={`flex-1 md:w-36 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'editor'
                  ? 'bg-accent-main text-white shadow-md'
                  : 'text-text-muted hover:text-text-main hover:bg-bg-input'
              }`}
            >
              Photo Editor
            </button>
            <Link
              href="/picture-background-remover"
              className={`flex-1 text-center md:w-44 py-2 px-4 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'bg_remover'
                  ? 'bg-lime-600 dark:bg-lime-500 text-white shadow-md'
                  : 'text-text-muted hover:text-text-main hover:bg-bg-input block'
              }`}
            >
              Bulk BG Remover
            </Link>
          </div>
        </header>

        <div className={activeTab === 'editor' ? 'block' : 'hidden'}>
          <PhotoEditor />
        </div>
        <div className={activeTab === 'bg_remover' ? 'block' : 'hidden'}>
          <BgRemoverApp />
        </div>

        {/* SEO Content Section */}
        <section className="mt-16 max-w-4xl mx-auto px-4 md:px-0">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">The Best Free Online photoresizerai</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Welcome to photoresizerai, your ultimate destination for professional-grade photo manipulation without the need to download heavy software. Whether you need to crop a profile picture, remove a background for an e-commerce product, or resize a batch of images for social media, our suite of tools handles it all instantly and securely.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">How to Use the Free Photo Editor</h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-12 not-prose">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lime-600 dark:text-lime-400 mb-2">1. Upload Image</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Simply drag and drop your photo into the workspace or click to browse files.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lime-600 dark:text-lime-400 mb-2">2. Edit & Adjust</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Use our powerful sidebar tools to crop, filter, remove backgrounds, or add text.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lime-600 dark:text-lime-400 mb-2">3. Free Export</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Download your edited masterpiece instantly in high-quality JPG, PNG, or WEBP formats.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-4 mb-12 not-prose">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Is the photoresizerai really free?</h4>
                <p className="text-slate-600 dark:text-slate-400">Yes! Our online photo editor is completely free to use. There are no hidden fees, no watermarks, and no premium subscriptions required to access core editing features.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Are my photos safe and private?</h4>
                <p className="text-slate-600 dark:text-slate-400">Absolutely. photoresizerai utilizes cutting-edge WebAssembly technology, meaning all photo editing and background removal happens entirely inside your local browser. Your images are never uploaded to our servers.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Do you support bulk background removal?</h4>
                <p className="text-slate-600 dark:text-slate-400">Yes, switch to the "Bulk BG Remover" tab at the top of the page. You can drag and drop multiple images at once, and our AI will automatically remove the backgrounds in sequence.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Why Choose Our Online photoresizerai?</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              When looking for a fast, reliable, and secure way to edit photos online, privacy and speed are crucial. Because we do not upload your data to remote cloud servers, you benefit from instantaneous edits and zero wait times. Whether you are creating a passport photo, designing social media graphics, or just doing a quick crop, everything you need is right here.
            </p>

            <div className="not-prose text-center sm:text-left mt-10">
              <Link 
                href="/tools" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-lime-600 rounded-xl shadow-lg shadow-lime-500/30 hover:bg-lime-700 hover:-translate-y-1 hover:shadow-lime-500/40 transition-all duration-300"
              >
                Browse All 40+ Free Tools
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

            {/* Internal Links for Background Remover Pages */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 not-prose">
              <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Explore Our Background Removal Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/bg-removal" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">BG Removal</Link>
                <Link href="/free-background-remover" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Free Background Remover</Link>
                <Link href="/background-eraser" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Background Eraser</Link>
                <Link href="/photo-background-remover" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Photo Background Remover</Link>
                <Link href="/remove-background-from-logo" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Remove Background From Logo</Link>
                <Link href="/picture-background-remover" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Picture Background Remover</Link>
                <Link href="/delete-background" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Delete Background</Link>
                <Link href="/background-remover-png" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Background Remover PNG</Link>
                <Link href="/change-picture-background" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Change Picture Background</Link>
                <Link href="/photo-background-changer" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Photo Background Changer</Link>
                <Link href="/clear-background" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Clear Background</Link>
                <Link href="/high-quality-background-remover" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">High Quality Background Remover</Link>
                <Link href="/delete-background-from-photo" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Delete Background From Photo</Link>
              </div>
            </div>

            {/* Internal Links for Passport & Visa Photo Tools */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 not-prose mb-12">
              <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Explore Our Passport & Visa Photo Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/passport-photo-maker" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Passport Photo Maker</Link>
                <Link href="/passport-photo-size-maker" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Passport Photo Size Maker</Link>
                <Link href="/pan-card-photo-resizer" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">PAN Card Photo Resizer</Link>
                <Link href="/passport-photo-editor" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Passport Photo Editor</Link>
                <Link href="/visa-photo-editor" className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 rounded-lg transition-colors">Visa Photo Editor</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
