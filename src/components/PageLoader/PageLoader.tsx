import { Suspense, ReactNode } from 'react';
import { PageSkeleton } from '../LoadingSkeleton';

interface PageLoaderProps {
  children: ReactNode;
}

export const PageLoader = ({ children }: PageLoaderProps) => {
  return <Suspense fallback={<PageSkeleton />}>{children}</Suspense>;
};

