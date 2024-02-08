'use client';

import localFont from 'next/font/local';
import Script from 'next/script';
import { useSelectedLayoutSegments } from 'next/navigation';
import { PrismicPreview } from '@prismicio/next';

import Footer from '@components/pages/SmoothieFactory/OrangeLeaf/common/Footer';
import Header from '@components/pages/SmoothieFactory/OrangeLeaf/common/Header';
import StyledComponentsRegistry from '@styles/registry';

import type { FC, ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import { StoreProvider } from 'src/context/StoreProvider';
import { repositoryName } from 'prismicio';

const nexa = localFont({
  src: [
    {
      path: '../../public/fonts/Nexa-Book.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/Nexa-Bold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../public/fonts/NexaBlack.otf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--nexa',
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html className={nexa.variable} lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7217011BH2"
        id="google-tag-manager"
        strategy="afterInteractive"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-7217011BH2');
        `}
      </Script>
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <PrismicPreview repositoryName={repositoryName} />
            <Footer />
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
