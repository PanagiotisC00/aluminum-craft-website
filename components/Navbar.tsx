import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { key: 'home', href: '#hero', label: t('nav.home') },
    { key: 'about', href: '#about', label: t('nav.about') },
    { key: 'services', href: '#services', label: t('nav.services') },
    { key: 'gallery', href: '#gallery', label: t('nav.gallery') },
    { key: 'contact', href: '#contact', label: t('nav.contact') },
  ];

  // Handle smooth scrolling to sections
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle language change
  const handleLanguageChange = (locale: string) => {
    setIsLanguageMenuOpen(false);
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-200 shadow-sm">
      <div className="max-width-container section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3 text-xl font-bold text-primary-900 hover:text-accent-600 transition-colors">
              <Image 
                src="/images/logo_aluminium.png"
                alt="Aluminum Craft Cyprus Logo"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="hidden sm:inline">Aluminum Craft Cyprus</span>
              <span className="sm:hidden text-lg">AC Cyprus</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-primary-600 hover:text-accent-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary-50"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center text-primary-600 hover:text-accent-600 p-2 rounded-md transition-colors"
                aria-label="Change language"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span className="ml-1 text-sm font-medium">
                  {router.locale?.toUpperCase()}
                </span>
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          router.locale === 'en'
                            ? 'bg-accent-50 text-accent-700'
                            : 'text-primary-700 hover:bg-primary-50'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleLanguageChange('el')}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          router.locale === 'el'
                            ? 'bg-accent-50 text-accent-700'
                            : 'text-primary-700 hover:bg-primary-50'
                        }`}
                      >
                        Ελληνικά
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:text-accent-600 hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-primary-200">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-primary-600 hover:text-accent-600 hover:bg-primary-50 px-3 py-2 text-base font-medium rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 