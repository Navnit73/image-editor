import { EditorPreset, EditorConfigOptions } from "../types/editor";

export const PRESET_CONFIGS: Record<EditorPreset, EditorConfigOptions> = {
  crop: {
    preset: "crop",
    defaultAspectRatio: undefined,
    tabs: ["Crop", "Finetune"],
    tools: ["Crop", "Rotate"],
    showCropGrid: true,
  },
  resize: {
    preset: "resize",
    tabs: ["Resize", "Export"],
    tools: ["Resize"],
  },
  compress: {
    preset: "compress",
    quality: 0.7,
    outputFormat: "image/jpeg",
    tabs: ["Export"],
  },
  rotate: {
    preset: "rotate",
    tabs: ["Crop"],
    tools: ["Rotate", "Flip"],
  },
  passport: {
    preset: "passport",
    defaultAspectRatio: 35 / 45,
    tabs: ["Crop", "Finetune"],
    tools: ["Crop", "Adjust"],
    showCropGrid: true,
  },
  background: {
    preset: "background",
    tabs: ["Finetune", "Annotate"],
    tools: ["Adjust"],
  },
  watermark: {
    preset: "watermark",
    watermarkText: "© My Watermark",
    tabs: ["Annotate"],
    tools: ["Text", "Image"],
  },
  filters: {
    preset: "filters",
    tabs: ["Filters", "Finetune"],
  },
  full: {
    preset: "full",
    tabs: ["Crop", "Finetune", "Filters", "Annotate", "Resize"],
  },
};
