import { useState, useMemo } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';
import { formatCurrency } from '../../utils';

interface ProductConfiguratorProps {
  basePrice: number;
  colors?: string[];
  materials?: string[];
  sizes?: Array<{ name: string; priceModifier?: number }>;
  onConfigurationChange?: (config: {
    color?: string;
    material?: string;
    size?: string;
    finalPrice: number;
  }) => void;
}

export const ProductConfigurator = ({
  basePrice,
  colors = [],
  materials = [],
  sizes = [],
  onConfigurationChange,
}: ProductConfiguratorProps) => {
  const { t, language } = useTranslation();
  const { language: lang } = useLanguageStore();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  const finalPrice = useMemo(() => {
    let price = basePrice;
    const selectedSizeObj = sizes.find((s) => s.name === selectedSize);
    if (selectedSizeObj?.priceModifier) {
      price += selectedSizeObj.priceModifier;
    }
    return price;
  }, [basePrice, selectedSize, sizes]);

  const handleConfigChange = () => {
    onConfigurationChange?.({
      color: selectedColor,
      material: selectedMaterial,
      size: selectedSize,
      finalPrice,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <h3 className="text-responsive-xl font-semibold text-accent-charcoal mb-6">
        {t('configurator.title')}
      </h3>

      <div className="space-y-6">
        {/* Color Selection */}
        {colors.length > 0 && (
          <div>
            <label className="block text-responsive-sm font-medium text-taupe-700 mb-3">
              {t('configurator.selectColor')}
            </label>
            <div className="flex gap-3 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    handleConfigChange();
                  }}
                  className={`px-4 py-2 rounded-lg border-2 transition-all touch-target min-h-[44px] ${
                    selectedColor === color
                      ? 'border-accent-gold bg-cream-100 text-accent-charcoal font-semibold'
                      : 'border-cream-300 hover:border-taupe-400 text-taupe-700 hover:bg-cream-50'
                  }`}
                  aria-label={`${t('configurator.selectColor')}: ${color}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Material Selection */}
        {materials.length > 0 && (
          <div>
            <label className="block text-responsive-sm font-medium text-taupe-700 mb-3">
              {t('configurator.selectMaterial')}
            </label>
            <div className="flex gap-3 flex-wrap">
              {materials.map((material) => (
                <button
                  key={material}
                  onClick={() => {
                    setSelectedMaterial(material);
                    handleConfigChange();
                  }}
                  className={`px-4 py-2 rounded-lg border-2 transition-all touch-target min-h-[44px] ${
                    selectedMaterial === material
                      ? 'border-accent-gold bg-cream-100 text-accent-charcoal font-semibold'
                      : 'border-cream-300 hover:border-taupe-400 text-taupe-700 hover:bg-cream-50'
                  }`}
                  aria-label={`${t('configurator.selectMaterial')}: ${material}`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size Selection */}
        {sizes.length > 0 && (
          <div>
            <label className="block text-responsive-sm font-medium text-taupe-700 mb-3">
              {t('configurator.selectSize')}
            </label>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => {
                    setSelectedSize(size.name);
                    handleConfigChange();
                  }}
                  className={`px-4 py-2 rounded-lg border-2 transition-all touch-target min-h-[44px] ${
                    selectedSize === size.name
                      ? 'border-accent-gold bg-cream-100 text-accent-charcoal font-semibold'
                      : 'border-cream-300 hover:border-taupe-400 text-taupe-700 hover:bg-cream-50'
                  }`}
                  aria-label={`${t('configurator.selectSize')}: ${size.name}`}
                >
                  {size.name}
                  {size.priceModifier && size.priceModifier !== 0 && (
                    <span className="ml-2 text-xs">
                      ({size.priceModifier > 0 ? '+' : ''}
                      {formatCurrency(size.priceModifier, lang)})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price Display */}
        <div className="pt-6 border-t border-cream-200">
          <div className="flex justify-between items-center">
            <span className="text-responsive-base font-medium text-taupe-700">
              {t('configurator.updatePrice')}:
            </span>
            <span className="text-h2 font-serif font-semibold text-accent-gold">
              {formatCurrency(finalPrice, lang)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

