import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const { t, language } = useTranslation();

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <nav aria-label={t('accessibility.pagination')} className="flex justify-center items-center gap-2 mt-8" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2.5 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 active:bg-gray-100 transition-colors touch-target min-h-[44px] text-responsive-sm"
        aria-label={t('accessibility.previousPage')}
      >
        {language === 'he' ? '→' : '←'}
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          aria-label={typeof page === 'number' ? `${t('accessibility.goToPage')} ${page}` : undefined}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`px-4 py-2.5 border rounded-lg transition-colors touch-target min-h-[44px] min-w-[44px] text-responsive-sm ${
            page === currentPage
              ? 'bg-blue-600 text-white border-blue-600'
              : page === '...'
              ? 'border-transparent cursor-default'
              : 'border-gray-300 hover:bg-gray-50 active:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2.5 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 active:bg-gray-100 transition-colors touch-target min-h-[44px] text-responsive-sm"
        aria-label={t('accessibility.nextPage')}
      >
        {language === 'he' ? '←' : '→'}
      </button>
    </nav>
  );
};

