import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp); 