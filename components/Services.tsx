import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  BuildingOfficeIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const { t } = useTranslation('common');

  // Services data with icons
  const services = [
    {
      key: 'windows',
      icon: HomeIcon,
      title: t('services.items.windows.title'),
      description: t('services.items.windows.description'),
    },
    {
      key: 'railings',
      icon: BuildingOfficeIcon,
      title: t('services.items.railings.title'),
      description: t('services.items.railings.description'),
    },
    {
      key: 'shutters',
      icon: ShieldCheckIcon,
      title: t('services.items.shutters.title'),
      description: t('services.items.shutters.description'),
    },
    {
      key: 'repairs',
      icon: WrenchScrewdriverIcon,
      title: t('services.items.repairs.title'),
      description: t('services.items.repairs.description'),
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
    <section id="services" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-width-container section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-primary-600 mb-8 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary-100 hover:border-accent-200"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="heading-3 text-xl mb-4 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
            Need a custom aluminum solution? Our experienced team can handle projects of any size and complexity.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 