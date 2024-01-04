import AboutUsForm from '@components/pages/SmoothieFactory/AboutUs/Form/AboutUsForm';
import Header from '@components/pages/SmoothieFactory/AboutUs/Header/Header';
import HowItStarted from '@components/pages/SmoothieFactory/AboutUs/HowItStarted/HowItStarted';
import JoinUs from '@components/pages/SmoothieFactory/AboutUs/JoinUs/JoinUs';
import { createClient } from 'prismicio';

import type { FC } from 'react';
import { AboutUsHeaderAreaSlice, HowItStartedSlice } from 'prismicio-types';

export const metadata = {
  title: 'About Us | Smoothie Factory + Kitchen',
};

/* @ts-expect-error Server Component */
const AboutUs: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('about_us');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'about_us_header_area') as
    | AboutUsHeaderAreaSlice
    | undefined;
  const howItStartedSlice = page.data.slices.find((slice) => slice.slice_type === 'how_it_started') as
    | HowItStartedSlice
    | undefined;

  return (
    <>
      {headerSlice ? <Header slice={headerSlice} /> : null}
      {howItStartedSlice ? <HowItStarted slice={howItStartedSlice} /> : null}
      <AboutUsForm />
      {/* <JoinUs /> */}
    </>
  );
};

export default AboutUs;
