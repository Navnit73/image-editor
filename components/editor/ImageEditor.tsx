"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { EditorPreset } from "@/lib/types/editor";
import { getFilerobotConfig } from "@/lib/editor/mapper";
import { Upload, ShieldCheck, ArrowLeft } from "lucide-react";

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

const EDITOR_I18N: Record<string, {
  title: string;
  subtext: string;
  button: string;
  privacy: string;
  loading: string;
  changePhoto: string;
}> = {
  en: {
    title: "Upload your photo to start editing",
    subtext: "Drag and drop your image file here, or click to browse from your device.",
    button: "Select Image File",
    privacy: "100% Client-Side Privacy • Your photo never leaves your browser",
    loading: "Loading Image Editor...",
    changePhoto: "Upload Another Photo",
  },
  pt: {
    title: "Envie sua foto para começar a editar",
    subtext: "Arraste e solte o arquivo de imagem aqui ou clique para selecionar do seu dispositivo.",
    button: "Selecionar Arquivo de Imagem",
    privacy: "100% Privacidade Local • Sua foto nunca sai do seu navegador",
    loading: "Carregando Editor de Imagem...",
    changePhoto: "Enviar Outra Foto",
  },
  de: {
    title: "Laden Sie Ihr Foto hoch, um mit der Bearbeitung zu beginnen",
    subtext: "Ziehen Sie Ihre Bilddatei hierher oder klicken Sie, um von Ihrem Gerät auszuwählen.",
    button: "Bilddatei Auswählen",
    privacy: "100% Lokaler Datenschutz • Ihr Foto verlässt niemals Ihren Browser",
    loading: "Bild-Editor wird geladen...",
    changePhoto: "Anderes Foto Wählen",
  },
};

export function ImageEditor({ preset, locale = "en", onSave }: ImageEditorProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Suppress third-party library DOM attribute console warnings in development mode
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      const originalError = console.error;
      const originalWarn = console.warn;

      const shouldFilter = (msg: string) =>
        msg.includes("React does not recognize") ||
        msg.includes("non-boolean attribute") ||
        msg.includes("unique \"key\" prop") ||
        msg.includes("same key") ||
        msg.includes("CropPresetsOption") ||
        msg.includes("styled.div") ||
        msg.includes("warning-keys");

      console.error = (...args: any[]) => {
        const fullMsg = args
          .map((a) => (typeof a === "string" ? a : String(a)))
          .join(" ");
        if (shouldFilter(fullMsg)) {
          return;
        }
        originalError(...args);
      };

      console.warn = (...args: any[]) => {
        const fullMsg = args
          .map((a) => (typeof a === "string" ? a : String(a)))
          .join(" ");
        if (shouldFilter(fullMsg)) {
          return;
        }
        originalWarn(...args);
      };

      return () => {
        console.error = originalError;
        console.warn = originalWarn;
      };
    }
  }, []);

  const validLocale = (locale && EDITOR_I18N[locale] ? locale : "en") as string;
  const i18n = EDITOR_I18N[validLocale] || EDITOR_I18N.en;

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
    <div>
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
            {i18n.title}
          </h3>
          <p className="font-body text-[17px] text-[#7a7a7a] max-w-[500px] mb-8 leading-[1.45]">
            {i18n.subtext}
          </p>

          {/* Primary Upload Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="btn-apple-primary font-body text-[17px] py-3.5 px-10 shadow-sm cursor-pointer"
          >
            {i18n.button}
          </button>

          {/* Privacy Guarantee Note */}
          <div className="mt-12 flex items-center gap-2 font-caption text-[13px] text-[#7a7a7a] bg-white px-4 py-2 rounded-full border border-[#e0e0e0]">
            <ShieldCheck className="w-4 h-4 text-[#0066cc]" />
            <span>{i18n.privacy}</span>
          </div>
        </div>
      ) : (
        /* Upload State 2: Photo Uploaded (Show Filerobot Image Editor) */
        <div className="w-full max-w-full overflow-hidden">
          <div className="mb-3.5 flex items-center justify-between px-1">
            <button
              onClick={() => setUploadedImage(null)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#fafafc] border border-[#e0e0e0] hover:border-[#0066cc]/40 rounded-full font-body text-[14px] font-medium text-[#1d1d1f] hover:text-[#0066cc] transition-all cursor-pointer shadow-sm apple-active-scale"
            >
              <ArrowLeft className="w-4 h-4 text-[#0066cc]" />
              <span>{i18n.changePhoto}</span>
            </button>
            <span className="font-caption text-[13px] text-[#7a7a7a] font-normal hidden sm:inline-block">
              100% Client-Side RAM Processing
            </span>
          </div>

          {/* Filerobot Canvas Frame */}
          <div className="w-full max-w-full min-h-[500px] h-[540px] sm:h-[620px] md:h-[680px] bg-[#ffffff] relative overflow-hidden rounded-[16px] border border-[#e0e0e0] shadow-sm">
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
                  { itemKey: "crop-free", titleKey: "Free", descriptionKey: "free" },
                  { itemKey: "crop-1-1", titleKey: "1:1", descriptionKey: "1:1", ratio: 1 },
                  { itemKey: "crop-16-9", titleKey: "16:9", descriptionKey: "16:9", ratio: 16 / 9 },
                  { itemKey: "crop-4-3", titleKey: "4:3", descriptionKey: "4:3", ratio: 4 / 3 },
                  { itemKey: "crop-9-16", titleKey: "9:16", descriptionKey: "9:16", ratio: 9 / 16 },
                  { itemKey: "crop-35-45", titleKey: "35:45", descriptionKey: "35:45", ratio: 35 / 45 },
                ] as any,
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

        
        </div>
      )}
    </div>
  );
}
