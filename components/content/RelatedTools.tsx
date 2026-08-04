"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Crop, Maximize2, FileArchive, UserCheck, Stamp } from "lucide-react";

interface RelatedToolsProps {
  currentLocale: string;
  relatedSlugs?: string[];
}

const TOOL_METADATA: Record<string, { title: string; category: string; icon: any }> = {
  "image-cropper": { title: "Image Cropper", category: "Crop & Trim", icon: Crop },
  "cortar-imagem": { title: "Cortador de Imagem", category: "Recorte", icon: Crop },
  "bild-zuschneiden": { title: "Bild-Zuschneider", category: "Zuschneiden", icon: Crop },

  "passport-photo-maker": { title: "Passport Photo Maker", category: "AI Biometric", icon: UserCheck },
  "foto-passaporte": { title: "Foto Passaporte", category: "Biometria IA", icon: UserCheck },
  "passfoto-generator": { title: "Passfoto Generator", category: "Passbild KI", icon: UserCheck },

  "decrease-pic-size": { title: "Decrease Pic Size", category: "Compression", icon: FileArchive },
  "diminuir-tamanho-da-foto": { title: "Diminuir Tamanho da Foto", category: "Compressão", icon: FileArchive },
  "foto-verkleinern": { title: "Foto Verkleinern", category: "Komprimierung", icon: FileArchive },

  "reduce-image-dimensions": { title: "Reduce Image Dimensions", category: "Dimensions", icon: Maximize2 },
  "reduzir-dimensoes-da-imagem": { title: "Reduzir Dimensões", category: "Dimensões", icon: Maximize2 },
  "bildabmessungen-reduzieren": { title: "Bildabmessungen Reduzieren", category: "Abmessungen", icon: Maximize2 },

  "photo-image-resizer": { title: "Photo Image Resizer", category: "Resizing", icon: Maximize2 },
  "redimensionador-de-fotos": { title: "Redimensionador de Fotos", category: "Redimensionar", icon: Maximize2 },
  "foto-resizer-online": { title: "Foto Resizer Online", category: "Skalierung", icon: Maximize2 },

  "increase-image-dimensions": { title: "Increase Image Dimensions", category: "Upscaling", icon: Maximize2 },
  "aumentar-dimensoes-da-imagem": { title: "Aumentar Dimensões", category: "Ampliação", icon: Maximize2 },
  "bildgroesse-erhoehen": { title: "Bildgröße Erhöhen", category: "Vergrößerung", icon: Maximize2 },

  "decrease-image-size-in-kb": { title: "Decrease Size in KB", category: "KB Reducer", icon: FileArchive },
  "diminuir-tamanho-da-imagem-em-kb": { title: "Diminuir Tamanho em KB", category: "Redutor KB", icon: FileArchive },
  "bildgroesse-in-kb-verringern": { title: "Größe in KB Verringern", category: "KB-Reduzierung", icon: FileArchive },

  "adobe-express-image-resize": { title: "Adobe Express Resizer", category: "Alternative", icon: Maximize2 },
  "adobe-express-redimensionar-imagem": { title: "Alternativa Adobe Express", category: "Alternativa", icon: Maximize2 },
  "adobe-express-bildgroesse-aendern": { title: "Adobe Express Alternative", category: "Alternative", icon: Maximize2 },
};

export function RelatedTools({ currentLocale, relatedSlugs }: RelatedToolsProps) {
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  return (
    <section className="w-full py-16 px-6 bg-[#f5f5f7]">
      <div className="max-w-[1024px] mx-auto">
        <div className="mb-10 text-left">
          <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold tracking-wider uppercase block mb-1">
            Explore More Tools
          </span>
          <h2 className="font-display-lg text-[34px] font-semibold text-[#1d1d1f]">
            Complete your editing workflow.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedSlugs.map((slug) => {
            const meta = TOOL_METADATA[slug] || {
              title: slug.replace(/-/g, " "),
              category: "Tool",
              icon: Crop,
            };
            const IconComp = meta.icon;

            return (
              <Link
                key={slug}
                href={`/${currentLocale}/${slug}`}
                className="bg-white border border-[#e0e0e0] rounded-[18px] p-6 flex flex-col justify-between apple-active-scale group hover:border-[#0066cc]/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-caption text-[13px] text-[#7a7a7a] block mb-1">
                    {meta.category}
                  </span>
                  <h3 className="font-body-strong text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors mb-2 capitalize">
                    {meta.title}
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-[#0066cc] font-body text-[15px]">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
