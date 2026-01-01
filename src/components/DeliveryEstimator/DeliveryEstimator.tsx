import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';

interface DeliveryEstimatorProps {
  productId?: string;
  className?: string;
}

export const DeliveryEstimator = ({ productId, className = '' }: DeliveryEstimatorProps) => {
  const { t, language } = useTranslation();
  const [zipCode, setZipCode] = useState('');
  const [estimatedDays, setEstimatedDays] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    if (!zipCode.trim()) return;

    setIsCalculating(true);
    // Simulate API call
    setTimeout(() => {
      // Mock calculation - in real app, this would call an API
      const days = Math.floor(Math.random() * 7) + 3; // 3-10 days
      setEstimatedDays(days);
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`} dir={language === 'he' ? 'rtl' : 'ltr'}>
      <h3 className="text-responsive-xl font-semibold text-accent-charcoal mb-4">
        {t('delivery.title')}
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="zip-code" className="block text-responsive-sm font-medium text-taupe-700 mb-2">
            {t('delivery.enterZip')}
          </label>
          <div className="flex gap-2">
            <input
              id="zip-code"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="12345"
              className="flex-1 px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold text-responsive-base"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCalculate();
                }
              }}
            />
            <button
              onClick={handleCalculate}
              disabled={isCalculating || !zipCode.trim()}
              className="btn-luxury-accent px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? '...' : t('delivery.calculate')}
            </button>
          </div>
        </div>

        {estimatedDays !== null && (
          <div className="bg-cream-50 rounded-lg p-4 border border-cream-200">
            <p className="text-responsive-sm text-taupe-600 mb-2">{t('delivery.estimate')}:</p>
            <p className="text-responsive-lg font-semibold text-accent-charcoal">
              {t('delivery.days', { days: estimatedDays })}
            </p>
            <p className="text-responsive-xs text-taupe-500 mt-2">
              {t('delivery.standard')}
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-cream-200">
          <p className="text-responsive-xs text-taupe-500">
            {t('delivery.standard')}: 5-7 {language === 'he' ? 'ימים' : 'days'} |{' '}
            {t('delivery.express')}: 2-3 {language === 'he' ? 'ימים' : 'days'}
          </p>
        </div>
      </div>
    </div>
  );
};

