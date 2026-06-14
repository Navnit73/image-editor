import { useEffect, useRef } from 'react';
import { useEditor, LivePreviewData } from '../components/editor/EditorContext';

export function useImageProcessor() {
  const {
    imageFile,
    imageUrl,
    width,
    height,
    format,
    quality,
    backgroundColor,
    rotation,
    crop,
    setLivePreview,
    setIsProcessing,
  } = useEditor();

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!imageFile || !imageUrl) {
      setLivePreview({ url: null, sizeKb: 0, width: 0, height: 0 });
      return;
    }

    // Debounce processing to avoid lagging the UI while dragging sliders
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      processImage();
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [imageUrl, width, height, format, quality, backgroundColor, rotation, crop]);

  const processImage = async () => {
    setIsProcessing(true);
    try {
      const img = new Image();
      img.src = imageUrl!;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      // The final dimensions
      const finalWidth = width;
      const finalHeight = height;

      canvas.width = finalWidth;
      canvas.height = finalHeight;

      // Fill background
      if (backgroundColor && backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, finalWidth, finalHeight);
      } else if (format === 'image/jpeg') {
        // JPEG doesn't support transparency, default to white or whatever color is set
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, finalWidth, finalHeight);
      }

      // Draw the image with cropping and rotation
      ctx.save();
      ctx.translate(finalWidth / 2, finalHeight / 2);
      ctx.rotate((rotation * Math.PI) / 180);

      // If cropped, we need to map the crop rectangle back to the original image dimensions
      // But for simplicity, we'll draw the image centered and scaled to fit the final dimensions,
      // UNLESS there is a crop, in which case we draw the cropped portion scaled to fit.
      
      let sourceX = 0;
      let sourceY = 0;
      let sourceWidth = img.width;
      let sourceHeight = img.height;

      if (crop) {
        sourceX = crop.x;
        sourceY = crop.y;
        sourceWidth = crop.width;
        sourceHeight = crop.height;
      }

      // Simplistic crop handling: if we have a crop rect from Konva, it's relative to the Konva Stage.
      // But wait, the Konva Stage was scaled. This can be tricky.
      // For now, if there's no crop, we just scale the image to fit the requested dimensions
      // ignoring aspect ratio (or keeping it? The UI allows explicit W/H, so we might stretch).
      // Let's stretch to match the user's explicit W/H setting.
      
      ctx.drawImage(
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        -finalWidth / 2,
        -finalHeight / 2,
        finalWidth,
        finalHeight
      );
      
      ctx.restore();

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setIsProcessing(false);
            return;
          }

          const url = URL.createObjectURL(blob);
          const sizeKb = parseFloat((blob.size / 1024).toFixed(2));
          
          setLivePreview({
            url,
            sizeKb,
            width: finalWidth,
            height: finalHeight,
          });
          setIsProcessing(false);
        },
        format,
        quality / 100
      );

    } catch (error) {
      console.error('Error processing image:', error);
      setIsProcessing(false);
    }
  };
}
