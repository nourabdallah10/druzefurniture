import { ReactNode } from 'react';

type AspectRatio = 'square' | '4:3' | '16:9' | '3:2' | '21:9' | '1:1' | '2:1' | 'custom';

interface AspectRatioContainerProps {
  ratio: AspectRatio;
  customRatio?: number; // For custom ratio (e.g., 1.5 for 3:2)
  children: ReactNode;
  className?: string;
}

const ASPECT_RATIO_CLASSES: Record<Exclude<AspectRatio, 'custom'>, string> = {
  square: 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-video',
  '3:2': 'aspect-[3/2]',
  '21:9': 'aspect-[21/9]',
  '1:1': 'aspect-square',
  '2:1': 'aspect-[2/1]',
};

export const AspectRatioContainer = ({
  ratio,
  customRatio,
  children,
  className = '',
}: AspectRatioContainerProps) => {
  const aspectRatioClass =
    ratio === 'custom'
      ? ''
      : ASPECT_RATIO_CLASSES[ratio] || 'aspect-square';

  const customStyle =
    ratio === 'custom' && customRatio
      ? { paddingBottom: `${(1 / customRatio) * 100}%` }
      : {};

  return (
    <div
      className={`relative w-full ${aspectRatioClass} ${className}`}
      style={customStyle}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

