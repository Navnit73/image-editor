import { EditorPreset, EditorConfigOptions } from "../types/editor";
import { PRESET_CONFIGS } from "./presets";

export interface FilerobotTabConfig {
  tabsIds: string[];
  defaultTabId?: string;
  defaultToolId?: string;
  cropCustomAspectRatio?: number;
  savingPixelRatio?: number;
  quality?: number;
}

/**
 * Returns Filerobot-compatible configuration object based on the markdown editorPreset.
 * Maps primary crop tab to "Adjust" to mirror standard photo editing interface.
 */
export function getFilerobotConfig(preset: EditorPreset): FilerobotTabConfig {
  const config: EditorConfigOptions = PRESET_CONFIGS[preset] || PRESET_CONFIGS.full;

  switch (preset) {
    case "crop":
      return {
        tabsIds: ["Adjust", "Finetune", "Filters", "Watermark", "Annotate", "Resize"],
        defaultTabId: "Adjust",
        defaultToolId: "Crop",
      };

    case "resize":
      return {
        tabsIds: ["Resize", "Adjust", "Finetune"],
        defaultTabId: "Resize",
        defaultToolId: "Resize",
      };

    case "compress":
      return {
        tabsIds: ["Finetune", "Adjust", "Resize"],
        defaultTabId: "Finetune",
        quality: 0.7,
        savingPixelRatio: 1,
      };

    case "rotate":
      return {
        tabsIds: ["Adjust", "Finetune"],
        defaultTabId: "Adjust",
        defaultToolId: "Rotate",
      };

    case "passport":
      return {
        tabsIds: ["Adjust", "Finetune", "Annotate"],
        defaultTabId: "Adjust",
        defaultToolId: "Crop",
        cropCustomAspectRatio: 35 / 45,
      };

    case "watermark":
      return {
        tabsIds: ["Watermark", "Annotate", "Adjust"],
        defaultTabId: "Watermark",
        defaultToolId: "Text",
      };

    case "filters":
      return {
        tabsIds: ["Filters", "Finetune", "Adjust"],
        defaultTabId: "Filters",
      };

    case "background":
      return {
        tabsIds: ["Finetune", "Adjust", "Annotate"],
        defaultTabId: "Finetune",
      };

    case "full":
    default:
      return {
        tabsIds: ["Adjust", "Finetune", "Filters", "Watermark", "Annotate", "Resize"],
        defaultTabId: "Adjust",
        defaultToolId: "Crop",
      };
  }
}
