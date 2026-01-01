import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';

export type SortOption = 'price-low' | 'price-high' | 'newest';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  const { t, language } = useTranslation();

  const options: { value: SortOption; label: string }[] = [
    { value: 'price-low', label: t('sort.priceLowHigh') },
    { value: 'price-high', label: t('sort.priceHighLow') },
    { value: 'newest', label: t('sort.newest') },
  ];

  return (
    <div className="flex items-center gap-3" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t('sort.sortBy')}:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="pl-4 pr-7 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-pointer transition-colors duration-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA2TDggMTBMMTIgNiIgc3Ryb2tlPSIjNmI3MjgwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA2TDggMTBMMTIgNiIgc3Ryb2tlPSIjOWNhM2FmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-[length:1em_1em] bg-[right_0.5rem_center] bg-no-repeat"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

