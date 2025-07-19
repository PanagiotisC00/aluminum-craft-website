import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  // Handle smooth scrolling to sections
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-width-container section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white hover:text-accent-300 transition-colors">
              {t('footer.company')}
            </Link>
            <p className="mt-4 text-primary-200 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-accent-300" />
                <a 
                  href={`tel:${t('contact.info.phone')}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {t('contact.info.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-accent-300" />
                <a 
                  href={`mailto:${t('contact.info.email')}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {t('contact.info.email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-accent-300" />
                <span className="text-primary-200">
                  {t('contact.info.address')}
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                <a 
                  href={t('contact.info.facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-accent-300 transition-colors"
                  aria-label={t('footer.social.facebook')}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={t('contact.info.instagram')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-accent-300 transition-colors"
                  aria-label={t('footer.social.instagram')}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('#hero')}
                  className="text-primary-200 hover:text-white transition-colors block"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#about')}
                  className="text-primary-200 hover:text-white transition-colors block"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#services')}
                  className="text-primary-200 hover:text-white transition-colors block"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#gallery')}
                  className="text-primary-200 hover:text-white transition-colors block"
                >
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="text-primary-200 hover:text-white transition-colors block"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('services.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-200">{t('services.items.windows.title')}</li>
              <li className="text-primary-200">{t('services.items.railings.title')}</li>
              <li className="text-primary-200">{t('services.items.shutters.title')}</li>
              <li className="text-primary-200">{t('services.items.repairs.title')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-300 text-sm">
              © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-300 text-sm">{t('footer.language')}</span>
              <button
                onClick={() => router.push(router.pathname, router.asPath, { locale: 'en' })}
                className={`text-sm transition-colors ${
                  router.locale === 'en' 
                    ? 'text-accent-300 font-medium' 
                    : 'text-primary-300 hover:text-white'
                }`}
              >
                English
              </button>
              <span className="text-primary-500">|</span>
              <button
                onClick={() => router.push(router.pathname, router.asPath, { locale: 'el' })}
                className={`text-sm transition-colors ${
                  router.locale === 'el' 
                    ? 'text-accent-300 font-medium' 
                    : 'text-primary-300 hover:text-white'
                }`}
              >
                Ελληνικά
              </button>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <button 
                onClick={() => setActiveModal('privacy')}
                className="text-primary-300 hover:text-white transition-colors cursor-pointer"
              >
                {t('footer.links.privacy')}
              </button>
              <span className="text-primary-500">|</span>
              <button 
                onClick={() => setActiveModal('terms')}
                className="text-primary-300 hover:text-white transition-colors cursor-pointer"
              >
                {t('footer.links.terms')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <LegalModal 
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        type="privacy"
      />
      <LegalModal 
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        type="terms"
      />
    </footer>
  );
};

export default Footer; 