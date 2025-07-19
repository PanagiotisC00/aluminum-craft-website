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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-accent-50">
              <div>
                <h2 className="text-2xl font-bold text-primary-900">
                  {content.title}
                </h2>
                <p className="text-sm text-primary-600 mt-1">
                  {content.lastUpdated}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={t('aria.closeLightbox')}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {/* Introduction */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {content.intro}
              </p>

              {type === 'privacy' ? (
                <div className="space-y-8">
                  {/* Data Collection Section */}
                  <section>
                    <h3 className="text-xl font-semibold text-primary-900 mb-4 border-b border-accent-200 pb-2">
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-4 border-b border-accent-200 pb-2">
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-4 border-b border-accent-200 pb-2">
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-4 border-b border-accent-200 pb-2">
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-4 border-b border-accent-200 pb-2">
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-4 border-b border-accent-200 pb-2">
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-4 border-b border-accent-200 pb-2">
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

            {/* Footer */}
            <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="btn-primary px-6 py-2"
                >
                  {t('aria.closeLightbox')}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal; 