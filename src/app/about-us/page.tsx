import AboutUsForm from '@components/pages/SmoothieFactory/AboutUs/Form/AboutUsForm';
import Header from '@components/pages/SmoothieFactory/AboutUs/Header/Header';
import HowItStarted from '@components/pages/SmoothieFactory/AboutUs/HowItStarted/HowItStarted';
import JoinUs from '@components/pages/SmoothieFactory/AboutUs/JoinUs/JoinUs';

import type { FC } from 'react';

export const metadata = {
  title: 'About Us | Smoothie Factory + Kitchen',
};

const AboutUs: FC = () => (
  <>
    <Header />
    <HowItStarted />
    <AboutUsForm />
    <JoinUs />
  </>
);

export default AboutUs;
