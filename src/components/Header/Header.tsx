import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguageStore } from '../../store/languageStore';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set document direction on mount and when language changes
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', key: 'nav.home' },
    { path: '/sofas', key: 'nav.sofas' },
    { path: '/beds', key: 'nav.beds' },
    { path: '/tables', key: 'nav.tables' },
    { path: '/colors', key: 'nav.colors' },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-cream-200 dark:border-gray-700'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav aria-label={t('accessibility.menu')} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" dir="ltr">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2"
            dir={language === 'he' ? 'rtl' : 'ltr'}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2.5 sm:px-6 rounded-lg text-responsive-sm font-medium transition-all duration-300 touch-target ${
                  isActive(link.path)
                    ? isScrolled
                      ? 'text-accent-charcoal dark:text-gray-100 border-b-2 border-accent-gold dark:border-accent-gold'
                      : 'text-accent-charcoal dark:text-gray-100 border-b-2 border-accent-gold dark:border-accent-gold'
                    : isScrolled
                    ? 'text-taupe-600 dark:text-gray-300 hover:text-accent-charcoal dark:hover:text-gray-100 hover:bg-cream-50 dark:hover:bg-gray-800'
                    : 'text-taupe-600 dark:text-gray-300 hover:text-accent-charcoal dark:hover:text-gray-100 hover:bg-cream-100 dark:hover:bg-gray-800'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

              {/* Right side: Theme Toggle + Language Switcher + Mobile Menu Button */}
              <div className="flex items-center gap-2 sm:gap-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
                {/* Theme Toggle - Desktop only */}
                <div className="hidden sm:block">
                  <ThemeToggle />
                </div>
                {/* Language Switcher - Always visible */}
                <div>
                  <LanguageSwitcher variant={isScrolled ? 'default' : 'dark'} />
                </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-3 touch-target rounded-lg transition-colors text-accent-charcoal dark:text-gray-100 hover:bg-cream-50 dark:hover:bg-gray-800 active:bg-cream-100 dark:active:bg-gray-700`}
              aria-label={t('accessibility.toggleMenu')}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

            {/* Mobile Menu */}
            <div
              id="mobile-menu"
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? 'max-h-96 opacity-100 pb-4'
                  : 'max-h-0 opacity-0 pb-0'
              }`}
              aria-hidden={!isMobileMenuOpen}
            >
          <div
            className="flex flex-col space-y-2 pt-4 border-t border-cream-200 dark:border-gray-700"
            dir={language === 'he' ? 'rtl' : 'ltr'}
          >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3.5 rounded-lg text-responsive-base font-medium transition-all duration-300 touch-target ${
                      isActive(link.path)
                        ? 'text-accent-charcoal dark:text-gray-100 border-b-2 border-accent-gold dark:border-accent-gold'
                        : 'text-taupe-600 dark:text-gray-300 hover:text-accent-charcoal dark:hover:text-gray-100 hover:bg-cream-50 dark:hover:bg-gray-800'
                    }`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {t(link.key)}
                  </Link>
                ))}
            {/* Theme Toggle in Mobile Menu */}
            <div className="pt-4 border-t border-cream-200 dark:border-gray-700">
              <div className="px-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-responsive-sm font-medium text-taupe-700 dark:text-gray-300">
                    {t('theme.toggle')}
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
