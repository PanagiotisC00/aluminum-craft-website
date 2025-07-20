import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ: React.FC = () => {
  const { t } = useTranslation('common');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq.services.question'),
      answer: t('faq.services.answer'),
    },
    {
      question: t('faq.specialist.question'),
      answer: t('faq.specialist.answer'),
    },
    {
      question: t('faq.areas.question'),
      answer: t('faq.areas.answer'),
    },
    {
      question: t('faq.setup.question'),
      answer: t('faq.setup.answer'),
    },
    {
      question: t('faq.experience.question'),
      answer: t('faq.experience.answer'),
    },
    {
      question: t('faq.warranty.question'),
      answer: t('faq.warranty.answer'),
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SEO-optimized hidden content for better keyword coverage */}
        <div className="sr-only">
          <p>
            Professional aluminum and aluminium fabrication specialist in Cyprus. 
            Custom aluminum setup, contractor services, and expert installation 
            across Nicosia, Limassol, Larnaca, Paphos, and Famagusta. Cyprus 
            aluminum company with over 15 years experience in metal fabrication 
            and custom aluminum work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 