import { useEffect, useRef } from 'react';
import { useEditor } from '../components/editor/EditorContext';

export function useImageProcessor() {
  const {
    imageFile, imageUrl, width, height, format, quality,
    backgroundColor, rotation, crop, textOverlays,
    setLivePreview, setIsProcessing,
  } = useEditor();

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!imageFile || !imageUrl) {
      setLivePreview({ url: null, sizeKb: 0, width: 0, height: 0 });
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      processImage();
    }, 250);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl, width, height, format, quality, backgroundColor, rotation, crop, textOverlays]);

  const processImage = async () => {
    if (!imageUrl) return;
    setIsProcessing(true);

    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = reject;
        i.src = imageUrl;
      });

      const finalWidth = width > 0 ? width : img.width;
      const finalHeight = height > 0 ? height : img.height;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context unavailable');

      // For rotated images, swap dimensions visually
      const isRotated90 = rotation === 90 || rotation === 270;
      canvas.width = isRotated90 ? finalHeight : finalWidth;
      canvas.height = isRotated90 ? finalWidth : finalHeight;

      // Background
      if (backgroundColor && backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (format === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw the source image (cropped/rotated)
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);

      let srcX = 0, srcY = 0, srcW = img.width, srcH = img.height;
      if (crop && crop.width > 0 && crop.height > 0) {
        srcX = crop.x;
        srcY = crop.y;
        srcW = crop.width;
        srcH = crop.height;
      }

      ctx.drawImage(img, srcX, srcY, srcW, srcH, -finalWidth / 2, -finalHeight / 2, finalWidth, finalHeight);
      ctx.restore();

      // Render text overlays
      for (const overlay of textOverlays) {
        ctx.save();

        const x = (overlay.x / 100) * canvas.width;
        const y = (overlay.y / 100) * canvas.height;

        ctx.translate(x, y);
        ctx.rotate((overlay.rotation * Math.PI) / 180);
        ctx.globalAlpha = overlay.opacity / 100;
        ctx.font = `${overlay.fontWeight} ${overlay.fontSize}px ${overlay.fontFamily}`;
        ctx.fillStyle = overlay.color;
        ctx.textAlign = overlay.align as CanvasTextAlign;
        ctx.textBaseline = 'middle';

        // Text shadow for readability
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 1;

        // Handle multi-line text
        const lines = overlay.text.split('\n');
        const lineHeight = overlay.fontSize * 1.25;
        const totalHeight = lines.length * lineHeight;
        lines.forEach((line, i) => {
          ctx.fillText(line, 0, (i * lineHeight) - (totalHeight / 2) + lineHeight / 2);
        });

        ctx.restore();
      }

      canvas.toBlob(
        (blob) => {
          if (!blob) { setIsProcessing(false); return; }
          const url = URL.createObjectURL(blob);
          const sizeKb = parseFloat((blob.size / 1024).toFixed(1));
          setLivePreview({ url, sizeKb, width: canvas.width, height: canvas.height });
          setIsProcessing(false);
        },
        format,
        quality / 100
      );
    } catch (error) {
      console.error('Image processing error:', error);
      setIsProcessing(false);
    }
  };
}