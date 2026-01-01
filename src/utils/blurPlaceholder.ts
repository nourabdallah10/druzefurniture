/**
 * Generate a blur placeholder data URI for images
 * Creates a tiny 20x20px image with a gradient background
 */
export const generateBlurPlaceholder = (width = 20, height = 20): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    // Fallback to SVG if canvas is not available
    return `data:image/svg+xml;base64,${btoa(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#faf9f7;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#f5f1ea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e8dfd1;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
      </svg>`
    )}`;
  }

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#faf9f7');
  gradient.addColorStop(0.5, '#f5f1ea');
  gradient.addColorStop(1, '#e8dfd1');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  return canvas.toDataURL();
};

/**
 * Generate a blur placeholder using CSS (server-side safe)
 * Returns a base64 encoded SVG
 */
export const getBlurPlaceholder = (): string => {
  const svg = `
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#faf9f7;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#f5f1ea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e8dfd1;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

