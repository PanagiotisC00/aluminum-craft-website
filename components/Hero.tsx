import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PhoneIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const { t } = useTranslation('common');

  // Handle contact button click
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle phone call
  const handlePhoneClick = () => {
    window.location.href = 'tel:+35799123456';
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
              <div 
          className="absolute inset-0 z-0 hero-bg"
          style={{
            backgroundImage: "url('/images/aluminum-hero-bg.jpg')"
          }}
        >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-width-container section-padding text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-accent-300 mb-3 sm:mb-4"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <button
              onClick={handleContactClick}
              className="btn-primary flex items-center gap-2 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px]"
            >
              <ChatBubbleBottomCenterTextIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              {t('hero.cta')}
            </button>
            
            <button
              onClick={handlePhoneClick}
              className="btn-secondary flex items-center gap-2 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              {t('hero.phone')}
            </button>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-300 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
                {t('about.experience')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-300 mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
                {t('about.projects')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-300 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
                {t('about.clients')}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6 text-accent-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 