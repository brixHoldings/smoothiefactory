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

  return (
    <>
      <Header slices={page.data.slices} slice={page.data.slices[0]} />
      <WhatIsNew />
      <Gallery />
      <BlendTogether />
      <LetsConnect />
    </>
  );
};

export default Home;
