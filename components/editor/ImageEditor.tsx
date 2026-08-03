"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { EditorPreset } from "@/lib/types/editor";
import { getFilerobotConfig } from "@/lib/editor/mapper";
import { Upload, ArrowLeft, ShieldCheck } from "lucide-react";

// Dynamic import of Filerobot Image Editor with SSR disabled
const FilerobotImageEditor = dynamic(
  () => import("react-filerobot-image-editor").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] bg-[#f5f5f7] rounded-[24px] flex flex-col items-center justify-center text-[#7a7a7a]">
        <div className="w-10 h-10 border-4 border-[#0066cc] border-t-transparent rounded-full animate-spin mb-4" />
        <span className="font-body text-[17px]">Loading Image Editor...</span>
      </div>
    ),
  }
);

interface ImageEditorProps {
  preset: EditorPreset;
  locale?: string;
  onSave?: (editedImageObject: any) => void;
}

export function ImageEditor({ preset, onSave }: ImageEditorProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const config = getFilerobotConfig(preset);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <div >
      {/* Upload State 1: No Photo Uploaded Yet (Show Pure Drag & Drop Upload Zone) */}
      {!uploadedImage ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`w-full min-h-[520px] rounded-[20px] border-2 border-dashed transition-all flex flex-col items-center justify-center p-8 text-center cursor-pointer ${
            isDragging
              ? "border-[#0066cc] bg-[#0066cc]/5 scale-[0.99]"
              : "border-[#e0e0e0] bg-[#fafafc] hover:border-[#0066cc]/50 hover:bg-white"
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleInputChange}
          />

          {/* Upload Icon Badge */}
          <div className="w-20 h-20 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-6 shadow-sm">
            <Upload className="w-9 h-9" />
          </div>

          <h3 className="font-display-lg text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-3">
            Upload your photo to start editing
          </h3>
          <p className="font-body text-[17px] text-[#7a7a7a] max-w-[500px] mb-8 leading-[1.45]">
            Drag and drop your image file here, or click to browse from your device.
          </p>

          {/* Primary Upload Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="btn-apple-primary font-body text-[17px] py-3.5 px-10 shadow-sm cursor-pointer"
          >
            Select Image File
          </button>

          {/* Privacy Guarantee Note */}
          <div className="mt-12 flex items-center gap-2 font-caption text-[13px] text-[#7a7a7a] bg-white px-4 py-2 rounded-full border border-[#e0e0e0]">
            <ShieldCheck className="w-4 h-4 text-[#0066cc]" />
            <span>100% Client-Side Privacy • Your photo never leaves your browser</span>
          </div>
        </div>
      ) : (
        /* Upload State 2: Photo Uploaded (Show Filerobot Image Editor) */
        <div className="w-full">
         

          {/* Filerobot Canvas Frame */}
          <div className="w-full h-[620px] bg-[#ffffff] relative overflow-hidden rounded-[6px] border border-[#f0f0f0]">
            <FilerobotImageEditor
              source={uploadedImage}
              onSave={(editedImageObject: any) => {
                console.log("Saved Image Data:", editedImageObject);
                if (onSave) onSave(editedImageObject);
                const downloadLink = document.createElement("a");
                downloadLink.href = editedImageObject.imageBase64;
                downloadLink.download = `edited-photo-${preset}.png`;
                downloadLink.click();
              }}
              onClose={() => setUploadedImage(null)}
              annotationsCommon={{
                fill: "#0066cc",
              }}
              Text={{ text: "Watermark" }}
              Rotate={{ angle: 90, componentType: "slider" }}
              Crop={{
                presetsItems: [
                  { titleKey: "Free", descriptionKey: "free" },
                  { titleKey: "1:1", descriptionKey: "1:1", ratio: 1 },
                  { titleKey: "16:9", descriptionKey: "16:9", ratio: 16 / 9 },
                  { titleKey: "4:3", descriptionKey: "4:3", ratio: 4 / 3 },
                  { titleKey: "9:16", descriptionKey: "9:16", ratio: 9 / 16 },
                  { titleKey: "35:45", descriptionKey: "35:45", ratio: 35 / 45 },
                ],
                autoResize: true,
              }}
              tabsIds={config.tabsIds as any}
              defaultTabId={config.defaultTabId as any}
              defaultToolId={config.defaultToolId as any}
              savingPixelRatio={1}
              previewPixelRatio={1}
              theme={{
                palette: {
                  "bg-primary-active": "#83bbf3ff",
                  "accent-primary": "#0066cc",
                  "accent-primary-active": "#2b6babff",
                },
                typography: {
                  fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif",
                },
              }}
            />
          </div>

          {/* Status Bar */}
          <div className="px-4 py-2 mt-1 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7a7a7a]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0066cc]" />
              <span>Active Tab: <strong className="text-[#1d1d1f] capitalize">{config.defaultTabId || "Adjust"}</strong></span>
            </div>
            <span>Free Crop Enabled • HTML5 Canvas Security</span>
          </div>
        </div>
      )}
    </div>
  );
}
