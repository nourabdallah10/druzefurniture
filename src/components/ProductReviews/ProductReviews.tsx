import { useTranslation } from '../../hooks/useTranslation';

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

export const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  const { t, language } = useTranslation();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t('product.reviews')}</h2>
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{review.author}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center py-8">{t('product.noReviews')}</p>
      )}
    </div>
  );
};

