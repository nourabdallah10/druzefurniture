export const PageSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
      {/* Title Skeleton */}
      <div className="mb-8">
        <div className="h-10 bg-cream-200 rounded w-64 mb-4" />
        <div className="h-6 bg-cream-200 rounded w-96" />
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Skeleton */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div className="h-6 bg-cream-200 rounded w-32" />
            <div className="space-y-4">
              <div className="h-10 bg-cream-200 rounded" />
              <div className="h-10 bg-cream-200 rounded" />
            </div>
            <div className="h-6 bg-cream-200 rounded w-24" />
            <div className="space-y-2">
              <div className="h-4 bg-cream-200 rounded" />
              <div className="h-4 bg-cream-200 rounded" />
              <div className="h-4 bg-cream-200 rounded" />
            </div>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between">
            <div className="h-6 bg-cream-200 rounded w-48" />
            <div className="h-10 bg-cream-200 rounded w-40" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="card-luxury overflow-hidden flex flex-col">
                <div className="h-64 bg-cream-200" />
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-cream-200 rounded w-3/4" />
                  <div className="h-4 bg-cream-200 rounded w-full" />
                  <div className="h-4 bg-cream-200 rounded w-5/6" />
                  <div className="h-8 bg-cream-200 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

