'use client';

import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useEditor, AspectRatio } from './EditorContext';
import { UploadCloud, Crop as CropIcon, Scissors, Check, X } from 'lucide-react';
import { removeBackground } from '@imgly/background-removal';

const ASPECT_RATIOS: { label: AspectRatio; value: number | undefined }[] = [
  { label: 'free', value: undefined },
  { label: '1:1', value: 1 },
  { label: '16:9', value: 16 / 9 },
  { label: '4:3', value: 4 / 3 },
  { label: '3:2', value: 3 / 2 },
  { label: '9:16', value: 9 / 16 },
];

export default function OriginalWorkspace() {
  const {
    imageFile,
    imageUrl,
    setImageFile,
    setCrop,
    aspectRatio,
    setAspectRatio,
    isBgRemoving,
    setIsBgRemoving,
    setWidth,
    setHeight,
  } = useEditor();

  const [isCropping, setIsCropping] = useState(false);
  const [cropState, setCropState] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const imageRef = useRef<HTMLImageElement>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const url = URL.createObjectURL(file);

        const img = new Image();
        img.onload = () => {
          setImageFile(file, url, img.width, img.height);
          setIsCropping(false);
          setCropState(undefined);
          setCompletedCrop(undefined);
        };
        img.src = url;
      }
    },
    [setImageFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    multiple: false,
  });

  const handleRemoveBg = async () => {
    if (!imageUrl || isBgRemoving) return;
    setIsBgRemoving(true);
    try {
      const blob = await removeBackground(imageUrl);
      const url = URL.createObjectURL(blob);
      const file = new File([blob], 'no-bg.png', { type: 'image/png' });
      
      const img = new Image();
      img.onload = () => {
        setImageFile(file, url, img.width, img.height);
        setIsBgRemoving(false);
      };
      img.src = url;
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Failed to remove background. Please try again.');
      setIsBgRemoving(false);
    }
  };

  const handleCropComplete = () => {
    if (completedCrop && imageRef.current) {
      // react-image-crop gives us coordinates relative to the rendered image size.
      // We need to scale these to the natural image size.
      const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
      const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

      setCrop({
        x: completedCrop.x * scaleX,
        y: completedCrop.y * scaleY,
        width: completedCrop.width * scaleX,
        height: completedCrop.height * scaleY,
      });
      setWidth(Math.round(completedCrop.width * scaleX));
      setHeight(Math.round(completedCrop.height * scaleY));
    }
    setIsCropping(false);
  };

  const handleCancelCrop = () => {
    setIsCropping(false);
    setCropState(undefined);
    setCompletedCrop(undefined);
    setCrop(null); // Reset global crop state
  };

  const currentRatioValue = ASPECT_RATIOS.find((r) => r.label === aspectRatio)?.value;

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden relative">
      <div className="flex items-center gap-4 p-4 border-b border-zinc-200 dark:border-zinc-800">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Original Document</h3>
        {imageFile && (
          <div className="flex gap-2 ml-auto">
            {isCropping ? (
              <>
                <button
                  onClick={handleCancelCrop}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 rounded-md transition-colors"
                >
                  <X size={14} />
                  Cancel
                </button>
                <button
                  onClick={handleCropComplete}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-indigo-500 text-white hover:bg-indigo-600 rounded-md transition-colors"
                >
                  <Check size={14} />
                  Apply Crop
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsCropping(true)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 rounded-md transition-colors"
                >
                  <CropIcon size={14} />
                  Crop
                </button>
                <button
                  onClick={handleRemoveBg}
                  disabled={isBgRemoving}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 rounded-md transition-colors disabled:opacity-50"
                >
                  <Scissors size={14} />
                  {isBgRemoving ? 'Removing...' : 'Remove BG'}
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Aspect Ratio Toolbar (Only visible when cropping) */}
      {isCropping && (
        <div className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-2 flex gap-2 justify-center items-center overflow-x-auto">
          <span className="text-xs font-medium text-zinc-500 mr-2">Aspect Ratio:</span>
          {ASPECT_RATIOS.map((ratio) => (
            <button
              key={ratio.label}
              onClick={() => {
                setAspectRatio(ratio.label);
                // When ratio changes, update the current crop to fit the new ratio if it exists
                if (cropState && ratio.value) {
                  setCropState({
                    ...cropState,
                    width: cropState.width,
                    height: cropState.width / ratio.value,
                  });
                }
              }}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                aspectRatio === ratio.label
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500'
              }`}
            >
              {ratio.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 flex items-center justify-center p-6 bg-zinc-50/50 dark:bg-zinc-900/50 relative overflow-hidden">
        {isBgRemoving && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Removing Background...
            </p>
            <p className="text-xs text-zinc-500 mt-2 max-w-xs text-center">
              This uses local AI. The first time may take a moment to download the model.
            </p>
          </div>
        )}

        {!imageFile ? (
          <div
            {...getRootProps()}
            className={`w-full max-w-md p-12 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10'
                : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900'
            }`}
          >
            <input {...getInputProps()} />
            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4 text-indigo-500">
              <UploadCloud size={32} />
            </div>
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Upload Image</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Drag & drop an image here, or click to select one
            </p>
          </div>
        ) : (
          <div className="relative max-h-full max-w-full flex items-center justify-center">
            {isCropping ? (
              <ReactCrop
                crop={cropState}
                onChange={(_, percentCrop) => setCropState(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={currentRatioValue}
                className="max-h-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imageRef}
                  src={imageUrl!}
                  alt="Crop preview"
                  className="max-h-[600px] w-auto object-contain"
                />
              </ReactCrop>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl!}
                alt="Original"
                className="max-h-[600px] w-auto object-contain shadow-sm"
              />
            )}

            {/* Live Dimensions Tooltip */}
            {isCropping && completedCrop && completedCrop.width > 0 && completedCrop.height > 0 && imageRef.current && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/75 text-white text-xs font-semibold rounded-md shadow-lg pointer-events-none z-10 backdrop-blur-md">
                {Math.round(completedCrop.width * (imageRef.current.naturalWidth / imageRef.current.width))} &times;{' '}
                {Math.round(completedCrop.height * (imageRef.current.naturalHeight / imageRef.current.height))} px
              </div>
            )}
          </div>
        )}
      </div>

      {!imageFile && (
        <div className="p-4 text-center text-xs text-zinc-400 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
          Click or drag to start editing
        </div>
      )}
    </div>
  );
}
