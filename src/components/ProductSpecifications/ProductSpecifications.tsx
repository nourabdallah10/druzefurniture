import { useTranslation } from '../../hooks/useTranslation';

interface Specification {
  label: string;
  value: string;
}

interface ProductSpecificationsProps {
  specifications: Specification[];
}

export const ProductSpecifications = ({ specifications }: ProductSpecificationsProps) => {
  const { t, language } = useTranslation();

  // Filter out warranty and update dimensions value
  const filteredSpecs = specifications
    .filter((spec) => spec.label.toLowerCase() !== 'warranty')
    .map((spec) => {
      if (spec.label.toLowerCase() === 'dimensions') {
        return {
          ...spec,
          value: t('product.dimensionsCustomizable'),
        };
      }
      return spec;
    });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t('product.specifications')}</h2>
      <table className="w-full">
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredSpecs.map((spec, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 w-1/3">
                {spec.label}
              </td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 pt-6 border-t-2 border-gray-300 dark:border-gray-600">
        <div className="bg-cream-100 dark:bg-gray-700 rounded-lg p-4 border border-cream-300 dark:border-gray-600">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-gold dark:text-accent-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed flex-1">
              {t('product.customizationMessage')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

