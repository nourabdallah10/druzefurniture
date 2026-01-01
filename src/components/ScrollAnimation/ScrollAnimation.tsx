import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-up';
  delay?: number;
  className?: string;
}

export const ScrollAnimation = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        isVisible
          ? `opacity-100 animate-${animation}`
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

