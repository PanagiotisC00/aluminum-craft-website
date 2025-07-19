import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  // Handle form submission with Formspree
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xkgwbvdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: PhoneIcon,
      label: t('contact.labels.phone'),
      value: t('contact.info.phone'),
      href: `tel:${t('contact.info.phone')}`,
    },
    {
      icon: EnvelopeIcon,
      label: t('contact.labels.email'),
      value: t('contact.info.email'),
      href: `mailto:${t('contact.info.email')}`,
    },
    {
      icon: MapPinIcon,
      label: t('contact.labels.location'),
      value: t('contact.info.address'),
      href: null,
    },
    {
      icon: ClockIcon,
      label: t('contact.labels.hours'),
      value: t('contact.info.hours'),
      href: null,
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      url: t('contact.info.facebook'),
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: t('contact.info.instagram'),
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-primary-600 mb-8 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <p className="text-body max-w-4xl mx-auto mb-8">
            {t('contact.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
              <h3 className="heading-3 text-2xl mb-8 text-center">{t('contact.cardTitles.getInTouch')}</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary-50 transition-colors">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-500 uppercase tracking-wide font-medium">
                          {info.label}
                        </p>
                        <p className="text-primary-900 font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="block hover:scale-105 transition-transform"
                        >
                          {content}
                        </a>
                      ) : (
                        <div>{content}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-primary-200">
                <h4 className="text-sm font-semibold text-primary-700 mb-4">{t('footer.followUs')}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100"
          >
            <h3 className="heading-3 text-2xl mb-8 text-center">{t('contact.cardTitles.sendMessage')}</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="form-label">
                  {t('contact.form.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: t('contact.form.validation.nameRequired') })}
                  className={`form-input ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="form-label">
                  {t('contact.form.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: t('contact.form.validation.emailRequired'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('contact.form.validation.emailInvalid')
                    }
                  })}
                  className={`form-input ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="form-label">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="form-input"
                  placeholder="+357 99 123 456"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="form-label">
                  {t('contact.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  {...register('message', { required: t('contact.form.validation.messageRequired') })}
                  className={`form-input ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="h-5 w-5" />
                    {t('contact.form.submit')}
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
              >
                {t('contact.form.success')}
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
              >
                {t('contact.form.error')}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 