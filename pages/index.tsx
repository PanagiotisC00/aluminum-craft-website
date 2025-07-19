import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation('common');

  // SEO metadata based on current language
  const seoTitle = t('seo.title');
  const seoDescription = t('seo.description');
  const seoKeywords = t('seo.keywords');
  const currentLanguage = i18n.language;

  return (
    <>
      {/* SEO Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={currentLanguage} />
        <meta name="author" content="Aluminum Craft Cyprus" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aluminumcraftcy.com/" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:site_name" content="Aluminum Craft Cyprus" />
        <meta property="og:locale" content={currentLanguage === 'el' ? 'el_GR' : 'en_US'} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.aluminumcraftcy.com/" />
        <meta property="twitter:title" content={seoTitle} />
        <meta property="twitter:description" content={seoDescription} />
        <meta property="twitter:image" content="/images/og-image.jpg" />

        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.aluminumcraftcy.com${currentLanguage !== 'en' ? `/${currentLanguage}` : ''}`} />
        
        {/* Alternate Language URLs */}
        <link rel="alternate" hrefLang="en" href="https://www.aluminumcraftcy.com/" />
        <link rel="alternate" hrefLang="el" href="https://www.aluminumcraftcy.com/el/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.aluminumcraftcy.com/" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aluminum Craft Cyprus",
              "description": seoDescription,
              "url": "https://www.aluminumcraftcy.com",
              "telephone": "+357-99-123-456",
              "email": "info@aluminumcraftcy.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nicosia",
                "addressCountry": "CY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "35.1856",
                "longitude": "33.3823"
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "35.1856",
                  "longitude": "33.3823"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Aluminum Fabrication Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Aluminum Windows & Doors"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Railings & Balconies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rolling Shutters"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Repairs & Maintenance"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Main Website Content */}
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <ContactForm />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

export default HomePage; 