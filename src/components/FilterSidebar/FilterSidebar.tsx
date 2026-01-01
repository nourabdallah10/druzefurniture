import { useState, memo } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';

export interface FilterState {
  priceRange: [number, number];
  colors: string[];
  styles: string[];
  materials: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const FilterSidebarComponent = ({ filters, onFilterChange }: FilterSidebarProps) => {
  const { t, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const colors = ['Black', 'White', 'Gray', 'Beige', 'Brown', 'Blue', 'Red'];
  const styles = ['Modern', 'Classic', 'Contemporary', 'Traditional', 'Scandinavian'];
  const materials = ['Leather', 'Fabric', 'Velvet', 'Linen', 'Microfiber'];

  const updateFilters = (key: keyof FilterState, value: any) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const toggleColor = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    updateFilters('colors', newColors);
  };

  const toggleStyle = (style: string) => {
    const newStyles = filters.styles.includes(style)
      ? filters.styles.filter((s) => s !== style)
      : [...filters.styles, style];
    updateFilters('styles', newStyles);
  };

  const toggleMaterial = (material: string) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter((m) => m !== material)
      : [...filters.materials, material];
    updateFilters('materials', newMaterials);
  };

  const clearFilters = () => {
    onFilterChange({
      priceRange: [0, 10000],
      colors: [],
      styles: [],
      materials: [],
    });
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full mb-4 px-4 py-3 bg-blue-600 text-white rounded-lg text-responsive-base font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors touch-target min-h-[44px]"
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        {t('filters.showFilters')}
      </button>

      {/* Filter Sidebar */}
      <aside
        role="complementary"
        aria-label={t('filters.filters')}
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0`}
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-responsive-xl font-bold text-gray-900">{t('filters.filters')}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 touch-target min-h-[44px] min-w-[44px] flex items-center justify-center text-2xl"
            aria-label={t('accessibility.closeFilters')}
          >
            ✕
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('filters.priceRange')}</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) =>
                  updateFilters('priceRange', [Number(e.target.value), filters.priceRange[1]])
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Min"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  updateFilters('priceRange', [filters.priceRange[0], Number(e.target.value)])
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('filters.colors')}</h3>
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => toggleColor(color)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Styles */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('filters.styles')}</h3>
          <div className="space-y-2">
            {styles.map((style) => (
              <label key={style} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.styles.includes(style)}
                  onChange={() => toggleStyle(style)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('filters.materials')}</h3>
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material)}
                  onChange={() => toggleMaterial(material)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{material}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="w-full px-4 py-3 bg-gray-200 text-gray-700 text-responsive-base rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-target min-h-[44px]"
        >
          {t('filters.clearFilters')}
        </button>
      </aside>
    </>
  );
};

export const FilterSidebar = memo(FilterSidebarComponent);

