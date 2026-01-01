/**
 * Generate a tiny blurred version of an image for use as placeholder
 * This creates a base64 encoded data URL
 */
export const generateImageBlurDataURL = (): string => {
  // Return a small SVG gradient that can be used as a blur placeholder
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
  `.trim();

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

