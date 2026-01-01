export const ProductCardSkeleton = () => {
  return (
    <div className="card-luxury overflow-hidden flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-56 sm:h-64 bg-cream-200" />

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title Skeleton */}
        <div className="h-6 bg-cream-200 rounded mb-3 w-3/4" />

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4 flex-1">
          <div className="h-4 bg-cream-200 rounded w-full" />
          <div className="h-4 bg-cream-200 rounded w-5/6" />
        </div>

        {/* Price and Button Skeleton */}
        <div className="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-cream-200">
          <div className="flex flex-col gap-2">
            <div className="h-3 bg-cream-200 rounded w-12" />
            <div className="h-6 bg-cream-200 rounded w-24" />
          </div>
          <div className="h-10 bg-cream-200 rounded w-32" />
        </div>
      </div>
    </div>
  );
};

