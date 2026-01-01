import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

interface CategorySectionProps {
  titleKey: string;
  descriptionKey: string;
  route: string;
  image?: string;
}

export const CategorySection = ({
  titleKey,
  descriptionKey,
  route,
  image,
}: CategorySectionProps) => {
  const { t } = useTranslation();

  return (
    <Link to={route} className="block h-full">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
        {image && (
          <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 flex-shrink-0">
            <img
              src={image}
              alt={t(titleKey)}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {t(titleKey)}
        </h2>
        <p className="text-gray-600 flex-grow">{t(descriptionKey)}</p>
      </div>
    </Link>
  );
};

