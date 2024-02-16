import BlendTogether from '@components/pages/SmoothieFactory/Home/BlendTogether/BlendTogether';
import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import Header from '@components/pages/SmoothieFactory/Home/Header/Header';
import LetsConnect from '@components/pages/SmoothieFactory/Home/LetsConnect/LetsConnect';
import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';
import {
  HomeEClubSlice,
  HomeGallerySlice,
  HomeHeaderSlice,
  HomeInfoSectionSliceDefault,
  LetsConnectSlice,
} from 'prismicio-types';

import type { FC } from 'react';
import { createClient } from 'prismicio';
import { Metadata } from 'next';
import { asText } from '@prismicio/client';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: asText(page.data.meta_description),
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || '',
        },
      ],
    },
  };
}

/* @ts-expect-error Server Component */
const Home: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('homepage');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'home_header') as
    | HomeHeaderSlice
    | undefined;
  const whatIsNewSlice = page.data.slices.find((slice) => slice.slice_type === 'home_info_section') as
    | HomeInfoSectionSliceDefault
    | undefined;
  const gallerySlice = page.data.slices.find((slice) => slice.slice_type === 'home_gallery') as
    | HomeGallerySlice
    | undefined;
  const blendTogetherSlice = page.data.slices.find((slice) => slice.slice_type === 'home_e_club') as
    | HomeEClubSlice
    | undefined;
  const letsConnectSlice = page.data.slices.find((slice) => slice.slice_type === 'lets_connect') as
    | LetsConnectSlice
    | undefined;

  return (
    <>
      {headerSlice ? <Header slice={headerSlice} /> : null}
      {whatIsNewSlice ? <WhatIsNew slice={whatIsNewSlice} /> : null}
      {gallerySlice ? <Gallery slice={gallerySlice} /> : null}
      {blendTogetherSlice ? <BlendTogether slice={blendTogetherSlice} /> : null}
      {letsConnectSlice ? <LetsConnect slice={letsConnectSlice} /> : undefined}
    </>
  );
};

export default Home;
