export type EditorPreset =
  | "crop"
  | "resize"
  | "compress"
  | "rotate"
  | "passport"
  | "background"
  | "watermark"
  | "filters"
  | "full";

export interface EditorConfigOptions {
  preset: EditorPreset;
  defaultAspectRatio?: number;
  quality?: number;
  outputFormat?: "image/jpeg" | "image/png" | "image/webp";
  watermarkText?: string;
  tabs?: string[];
  tools?: string[];
  showCropGrid?: boolean;
}
