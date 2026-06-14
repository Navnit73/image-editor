'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp';
// UI friendly format names: jpg, jpeg, png, webp. We map jpg to image/jpeg in the UI.

export type AspectRatio = 'free' | '1:1' | '16:9' | '4:3' | '3:2' | '9:16';

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LivePreviewData {
  url: string | null;
  sizeKb: number;
  width: number;
  height: number;
}

interface EditorState {
  imageFile: File | null;
  imageUrl: string | null;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  format: ImageFormat;
  quality: number; // 1 to 100
  backgroundColor: string;
  rotation: number;
  crop: CropRect | null;
  aspectRatio: AspectRatio;
  livePreview: LivePreviewData;
  isProcessing: boolean;
  isBgRemoving: boolean;
}

interface EditorContextType extends EditorState {
  setImageFile: (file: File | null, url: string | null, width: number, height: number) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setFormat: (format: ImageFormat) => void;
  setQuality: (quality: number) => void;
  setBackgroundColor: (color: string) => void;
  setRotation: (rotation: number) => void;
  setCrop: (crop: CropRect | null) => void;
  setAspectRatio: (ratio: AspectRatio) => void;
  setLivePreview: (data: LivePreviewData) => void;
  setIsProcessing: (processing: boolean) => void;
  setIsBgRemoving: (removing: boolean) => void;
  reset: () => void;
}

const defaultState: EditorState = {
  imageFile: null,
  imageUrl: null,
  width: 0,
  height: 0,
  originalWidth: 0,
  originalHeight: 0,
  format: 'image/jpeg',
  quality: 90,
  backgroundColor: 'transparent',
  rotation: 0,
  crop: null,
  aspectRatio: 'free',
  livePreview: { url: null, sizeKb: 0, width: 0, height: 0 },
  isProcessing: false,
  isBgRemoving: false,
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<EditorState>(defaultState);

  const setImageFile = (file: File | null, url: string | null, width: number, height: number) => {
    setState((prev) => ({
      ...prev,
      imageFile: file,
      imageUrl: url,
      width,
      height,
      originalWidth: width,
      originalHeight: height,
      crop: null, // reset crop on new image
      aspectRatio: 'free',
      rotation: 0,
      backgroundColor: 'transparent',
    }));
  };

  const setWidth = (width: number) => setState((prev) => ({ ...prev, width }));
  const setHeight = (height: number) => setState((prev) => ({ ...prev, height }));
  const setFormat = (format: ImageFormat) => setState((prev) => ({ ...prev, format }));
  const setQuality = (quality: number) => setState((prev) => ({ ...prev, quality }));
  const setBackgroundColor = (backgroundColor: string) => setState((prev) => ({ ...prev, backgroundColor }));
  const setRotation = (rotation: number) => setState((prev) => ({ ...prev, rotation }));
  const setCrop = (crop: CropRect | null) => setState((prev) => ({ ...prev, crop }));
  const setAspectRatio = (aspectRatio: AspectRatio) => setState((prev) => ({ ...prev, aspectRatio }));
  const setLivePreview = (livePreview: LivePreviewData) => setState((prev) => ({ ...prev, livePreview }));
  const setIsProcessing = (isProcessing: boolean) => setState((prev) => ({ ...prev, isProcessing }));
  const setIsBgRemoving = (isBgRemoving: boolean) => setState((prev) => ({ ...prev, isBgRemoving }));
  const reset = () => setState(defaultState);

  return (
    <EditorContext.Provider
      value={{
        ...state,
        setImageFile,
        setWidth,
        setHeight,
        setFormat,
        setQuality,
        setBackgroundColor,
        setRotation,
        setCrop,
        setAspectRatio,
        setLivePreview,
        setIsProcessing,
        setIsBgRemoving,
        reset,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
