import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguageStore } from '../../store/languageStore';
import logo from '../../assets/images/logo.png';

export const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  const categories = [
    { path: '/sofas', key: 'nav.sofas' },
    { path: '/beds', key: 'nav.beds' },
    { path: '/tables', key: 'nav.tables' },
    { path: '/colors', key: 'nav.colors' },
  ];

  const quickLinks = [
    { path: '/', key: 'nav.home' },
    { path: '/sofas', key: 'nav.sofas' },
    { path: '/beds', key: 'nav.beds' },
    { path: '/tables', key: 'nav.tables' },
    { path: '/colors', key: 'nav.colors' },
  ];

  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
      href: 'https://www.facebook.com/profile.php?id=61556673386772',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      href: 'https://wa.me/972555026838',
    },
  ];

  return (
    <footer
      role="contentinfo" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content - 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo and Description */}
          <div className="lg:col-span-1" dir={language === 'he' ? 'rtl' : 'ltr'}>
            <Link to="/" className="flex items-center space-x-3 mb-4" dir="ltr">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-cover"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <nav aria-label={t('footer.quickLinks')} dir={language === 'he' ? 'rtl' : 'ltr'}>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Categories */}
          <nav aria-label={t('footer.categories')} dir={language === 'he' ? 'rtl' : 'ltr'}>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t('footer.categories')}
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                    {t(category.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact Information & Social Media */}
          <div dir={language === 'he' ? 'rtl' : 'ltr'}>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>
                  <span className="font-medium text-gray-200">{t('footer.phone')}:</span>{' '}
                  +972 55-502-6838
                </span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">
                {t('footer.followUs')}
              </h4>
              <nav aria-label={t('footer.followUs')} className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Furniture Store. {t('footer.copyright')}.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
