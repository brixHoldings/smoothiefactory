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
      <Script>
        {`(function(){ var s = document.createElement(&#39;script&#39;); var h =
            document.querySelector(&#39;head&#39;) || document.body; s.src =
            &#39;https://acsbapp.com/apps/app/dist/js/app.js&#39;; s.async = true; s.onload =
            function(){ acsbJS.init(); }; h.appendChild(s); })();`}
      </Script>
      <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WG42BBT');
`}
      </Script>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7217011BH2"
        id="google-tag-manager"
        strategy="afterInteractive"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7217011BH2');
        `}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WG42BBT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
