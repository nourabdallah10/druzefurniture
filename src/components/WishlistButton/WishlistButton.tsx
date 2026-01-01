import { useWishlistStore } from '../../store/wishlistStore';

interface WishlistButtonProps {
  product: {
    id: string;
    name: string;
    image: string;
    price?: number;
    category?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const WishlistButton = ({
  product,
  size = 'md',
  className = '',
}: WishlistButtonProps) => {
  const { isInWishlist, toggleItem } = useWishlistStore();

  const isWishlisted = isInWishlist(product.id);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleItem(product);
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} ${className} absolute top-3 right-3 z-30 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 touch-target flex items-center justify-center group`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <svg
        className={`${sizeClasses[size]} transition-all duration-200 ${
          isWishlisted
            ? 'fill-red-500 text-red-500'
            : 'fill-none text-gray-600 group-hover:text-red-500'
        }`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

