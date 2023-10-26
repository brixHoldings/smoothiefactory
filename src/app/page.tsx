// @ts-nocheck

import BlendTogether from '@components/pages/SmoothieFactory/Home/BlendTogether/BlendTogether';
import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import Header from '@components/pages/SmoothieFactory/Home/Header/Header';
import LetsConnect from '@components/pages/SmoothieFactory/Home/LetsConnect/LetsConnect';
import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';

import type { FC } from 'react';
import { createClient } from 'src/prismicio';

export const metadata = {
  title: 'Smoothie Factory® | A smoothie bar and nutrition supplement franchise company',
};

/* @ts-expect-error Server Component */
const Home: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('homepage');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'home_header');
  const whatIsNewSlice = page.data.slices.find((slice) => slice.slice_type === 'home_info_section');
  const gallerySlice = page.data.slices.find((slice) => slice.slice_type === 'home_gallery');
  const blendTogetherSlice = page.data.slices.find((slice) => slice.slice_type === 'home_e_club');
  const letsConnectSlice = page.data.slices.find((slice) => slice.slice_type === 'lets_connect');

  return (
    <>
      <Header slice={headerSlice} />
      <WhatIsNew slice={whatIsNewSlice} />
      <Gallery slice={gallerySlice} />
      <BlendTogether slice={blendTogetherSlice} />
      <LetsConnect slice={letsConnectSlice} />
    </>
  );
};

export default Home;
