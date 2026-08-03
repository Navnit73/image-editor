"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorPreset } from "@/lib/types/editor";
import { getFilerobotConfig } from "@/lib/editor/mapper";
import { Upload, RefreshCw } from "lucide-react";

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

// Default high quality initial image matching image 2 mountain vista
const INITIAL_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85";

export function ImageEditor({ preset, onSave }: ImageEditorProps) {
  const [currentImage, setCurrentImage] = useState<string>(INITIAL_IMAGE);

  const config = getFilerobotConfig(preset);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCurrentImage(url);
    }
  };

  return (
    <div className="w-full bg-white rounded-[24px] border border-[#e0e0e0] product-shadow overflow-hidden p-2 sm:p-4">
      {/* Top Controls Header: Minimal Upload CTA & Reset */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0f0f0]">
        <div className="flex items-center gap-3">
          <label className="btn-apple-primary text-[14px] cursor-pointer inline-flex items-center gap-2 py-1.5 px-4 font-normal">
            <Upload className="w-4 h-4" />
            <span>Upload Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
          <span className="font-caption text-[13px] text-[#7a7a7a] hidden sm:inline">
            Drag & drop or select your photo
          </span>
        </div>

        <button
          onClick={() => setCurrentImage(INITIAL_IMAGE)}
          className="btn-apple-pearl-capsule text-[13px] py-1.5 px-3 cursor-pointer flex items-center gap-1.5"
          title="Reset to default image"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Sample</span>
        </button>
      </div>

      {/* Editor Canvas Wrapper - Matches Image 2 UI Clean Light Layout */}
      <div className="w-full h-[620px] bg-[#ffffff] relative overflow-hidden rounded-[16px] border border-[#f0f0f0] mt-2">
        <FilerobotImageEditor
          source={currentImage}
          onSave={(editedImageObject: any) => {
            console.log("Saved Image Data:", editedImageObject);
            if (onSave) onSave(editedImageObject);
            const downloadLink = document.createElement("a");
            downloadLink.href = editedImageObject.imageBase64;
            downloadLink.download = `edited-photo-${preset}.png`;
            downloadLink.click();
          }}
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
          <span>Tab: <strong className="text-[#1d1d1f] capitalize">{config.defaultTabId || "Adjust"}</strong></span>
        </div>
        <span>Free Crop & HTML5 Canvas Processing</span>
      </div>
    </div>
  );
}
