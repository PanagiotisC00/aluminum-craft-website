import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  CheckBadgeIcon, 
  CogIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const { t } = useTranslation('common');

  // Company values data
  const values = [
    {
      key: 'quality',
      icon: CheckBadgeIcon,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
    },
    {
      key: 'precision',
      icon: CogIcon,
      title: t('about.values.precision.title'),
      description: t('about.values.precision.description'),
    },
    {
      key: 'trust',
      icon: ShieldCheckIcon,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description'),
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-workshop.jpg"
                alt="Aluminum fabrication workshop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-300">15+</div>
                    <div className="text-sm">{t('about.experience')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-300">500+</div>
                    <div className="text-sm">{t('about.projects')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-300">100%</div>
                    <div className="text-sm">{t('about.clients')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">{t('about.title')}</h2>
            <h3 className="text-xl text-accent-600 font-semibold mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-body mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Call to Action */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary mb-12"
            >
              Get Free Quote
            </button>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Why Choose Us</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.key}
                  variants={cardVariants}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="heading-3 text-xl mb-4 group-hover:text-accent-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-primary-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 