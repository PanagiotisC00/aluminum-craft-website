import React from 'react';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { t } = useTranslation('common');

  const content = t(`footer.legal.${type}`, { returnObjects: true }) as any;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl max-h-[85vh] w-full overflow-hidden mx-4 sm:mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-accent-50">
              <div className="flex-1 min-w-0 pr-3">
                <h2 className="text-lg sm:text-xl font-bold text-primary-900 leading-tight truncate">
                  {content.title}
                </h2>
                <p className="text-xs text-primary-600 mt-1 truncate">
                  {content.lastUpdated}
                </p>
              </div>
              <div className="flex-shrink-0 ml-2">
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-red-50 hover:border-red-200 rounded-lg transition-all duration-200 touch-manipulation min-w-[36px] min-h-[36px] flex items-center justify-center border-2 border-gray-200 bg-white shadow-sm hover:shadow-md"
                  aria-label={t('aria.closeLightbox')}
                >
                  <XMarkIcon className="h-5 w-5 stroke-2" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 overflow-y-auto max-h-[65vh] sm:max-h-[70vh] pb-6">
              {/* Introduction */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {content.intro}
              </p>

              {type === 'privacy' ? (
                <div className="space-y-8">
                  {/* Data Collection Section */}
                  <section>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3 sm:mb-4 border-b border-accent-200 pb-2">
                      {content.dataCollection.title}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>{content.dataCollection.contactForms}</p>
                      <p>{content.dataCollection.projectInfo}</p>
                      <p>{content.dataCollection.communication}</p>
                      <p>{content.dataCollection.analytics}</p>
                    </div>
                  </section>

                  {/* Data Use Section */}
                  <section>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3 sm:mb-4 border-b border-accent-200 pb-2">
                      {content.dataUse.title}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>{content.dataUse.quotes}</p>
                      <p>{content.dataUse.projects}</p>
                      <p>{content.dataUse.communication}</p>
                      <p>{content.dataUse.improvements}</p>
                    </div>
                  </section>

                  {/* Data Protection Section */}
                  <section>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3 sm:mb-4 border-b border-accent-200 pb-2">
                      {content.dataProtection.title}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>{content.dataProtection.security}</p>
                      <p>{content.dataProtection.retention}</p>
                      <p>{content.dataProtection.sharing}</p>
                      <p>{content.dataProtection.compliance}</p>
                    </div>
                  </section>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Services Section */}
                  <section>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3 sm:mb-4 border-b border-accent-200 pb-2">
                      {content.services.title}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>{content.services.description}</p>
                      <p>{content.services.coverage}</p>
                      <p>{content.services.quality}</p>
                      <p>{content.services.warranty}</p>
                    </div>
                  </section>

                  {/* Project Terms Section */}
                  <section>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3 sm:mb-4 border-b border-accent-200 pb-2">
                      {content.projectTerms.title}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>{content.projectTerms.quotes}</p>
                      <p>{content.projectTerms.deposit}</p>
                      <p>{content.projectTerms.measurements}</p>
                      <p>{content.projectTerms.timeline}</p>
                      <p>{content.projectTerms.materials}</p>
                    </div>
                  </section>

                  {/* Website Usage Section */}
                  <section>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3 sm:mb-4 border-b border-accent-200 pb-2">
                      {content.website.title}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>{content.website.purpose}</p>
                      <p>{content.website.content}</p>
                      <p>{content.website.accuracy}</p>
                    </div>
                  </section>

                  {/* Service Terms Section */}
                  <section>
                    <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3 sm:mb-4 border-b border-accent-200 pb-2">
                      {content.liability.title}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>{content.liability.standards}</p>
                      <p>{content.liability.weather}</p>
                      <p>{content.liability.access}</p>
                      <p>{content.liability.disputes}</p>
                    </div>
                  </section>
                </div>
              )}

              {/* Contact Information */}
              <div className="mt-8 p-4 bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg border-l-4 border-accent-500">
                <p className="text-sm text-gray-700">
                  {content.contact}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal; 