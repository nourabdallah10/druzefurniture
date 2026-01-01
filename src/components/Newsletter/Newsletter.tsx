import { useState, FormEvent } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';

export const Newsletter = () => {
  const { t, language } = useTranslation();
  const { language: lang } = useLanguageStore();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center px-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <h2 className="text-responsive-3xl font-bold mb-3 sm:mb-4">
          {t('home.newsletter.title')}
        </h2>
        <p className="text-responsive-lg text-blue-100 mb-6 sm:mb-8">
          {t('home.newsletter.subtitle')}
        </p>
        
        {isSubmitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-xl font-semibold">{t('home.newsletter.success')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              {t('home.newsletter.placeholder')}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('home.newsletter.placeholder')}
              required
              aria-label={t('home.newsletter.placeholder')}
              className="flex-1 px-4 py-3 sm:py-4 rounded-lg text-responsive-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 touch-target min-h-[44px]"
            />
            <button
              type="submit"
              aria-label={t('home.newsletter.button')}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 text-responsive-base font-semibold rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 whitespace-nowrap touch-target min-h-[44px]"
            >
              {t('home.newsletter.button')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

