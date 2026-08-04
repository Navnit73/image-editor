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
