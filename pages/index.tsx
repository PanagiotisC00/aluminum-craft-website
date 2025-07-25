import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
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
        <meta property="og:url" content={`https://aluminum-craft-fasouliotis.vercel.app${currentLanguage !== 'en' ? `/${currentLanguage}` : ''}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="https://aluminum-craft-fasouliotis.vercel.app/images/aluminum-hero-bg.jpg" />
        <meta property="og:site_name" content="Aluminum Craft Cyprus" />
        <meta property="og:locale" content={currentLanguage === 'el' ? 'el_GR' : 'en_US'} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://aluminum-craft-fasouliotis.vercel.app/images/aluminum-hero-bg.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://aluminum-craft-fasouliotis.vercel.app${currentLanguage !== 'en' ? `/${currentLanguage}` : ''}`} />
        
        {/* Alternate Language URLs */}
        <link rel="alternate" hrefLang="en" href="https://aluminum-craft-fasouliotis.vercel.app/" />
        <link rel="alternate" hrefLang="el" href="https://aluminum-craft-fasouliotis.vercel.app/el/" />
        <link rel="alternate" hrefLang="x-default" href="https://aluminum-craft-fasouliotis.vercel.app/" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Contractor", "HomeAndConstructionBusiness"],
              "name": "Aluminum Craft Cyprus",
              "alternateName": ["Aluminium Craft Cyprus", "Cyprus Aluminum Specialist", "Cyprus Aluminum Contractor"],
              "description": seoDescription,
              "url": "https://aluminum-craft-fasouliotis.vercel.app",
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
              "knowsAbout": [
                "Aluminum Fabrication",
                "Aluminium Fabrication",
                "Custom Aluminum Work",
                "Aluminum Installation",
                "Metal Fabrication",
                "Window Installation Cyprus",
                "Door Installation Cyprus",
                "Railing Fabrication",
                "Aluminum Contractor Services"
              ],
              "serviceType": [
                "Aluminum Fabrication",
                "Aluminium Fabrication", 
                "Metal Fabrication",
                "Window Installation",
                "Door Installation",
                "Railing Installation",
                "Contractor Services"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Aluminum Fabrication Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Aluminum Windows & Doors",
                      "description": "Custom aluminum and aluminium window setup and door installation across Cyprus",
                      "serviceType": "Window Installation",
                      "areaServed": ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"]
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Railings & Balconies",
                      "description": "Professional aluminum railing fabrication and custom balcony setup",
                      "serviceType": "Railing Installation",
                      "areaServed": ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"]
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rolling Shutters",
                      "description": "Aluminum rolling shutter installation and maintenance services",
                      "serviceType": "Shutter Installation",
                      "areaServed": ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"]
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Repairs & Maintenance",
                      "description": "Expert aluminum repair and maintenance services across Cyprus",
                      "serviceType": "Maintenance Service",
                      "areaServed": ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"]
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
          <FAQ />
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