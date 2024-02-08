import AboutSection from '@components/pages/SmoothieFactory/Franchising/AboutSection';
import FormSection from '@components/pages/SmoothieFactory/Franchising/FormSection';
import GetStartedSection from '@components/pages/SmoothieFactory/Franchising/GetStartedSection';
import HeaderSection from '@components/pages/SmoothieFactory/Franchising/HeaderSection';
import HowToSection from '@components/pages/SmoothieFactory/Franchising/HowToSection';
import MenuSection from '@components/pages/SmoothieFactory/Franchising/MenuSection';
import PurposeSection from '@components/pages/SmoothieFactory/Franchising/PurposeSection';
import VideoSection from '@components/pages/SmoothieFactory/Franchising/VideoSection';
import { createClient } from 'prismicio';

import type { FC } from 'react';
import {
  FranchisingAboutSectionSlice,
  FranchisingFormSectionSlice,
  FranchisingGetStartedSectionSlice,
  FranchisingHeaderSlice,
  FranchisingHowToSlice,
  FranchisingMenuSectionSlice,
  FranchisingPurposeSectionSlice,
} from 'prismicio-types';

export const metadata = {
  title: 'Franchising | Smoothie Factory + Kitchen',
};

/* @ts-expect-error Server Component */
const Franchising: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('franchising');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'franchising_header') as
    | FranchisingHeaderSlice
    | undefined;
  const howToSlice = page.data.slices.find((slice) => slice.slice_type === 'franchising_how_to') as
    | FranchisingHowToSlice
    | undefined;
  const menuSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_menu_section') as
    | FranchisingMenuSectionSlice
    | undefined;
  const purposeSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_purpose_section') as
    | FranchisingPurposeSectionSlice
    | undefined;
  const aboutSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_about_section') as
    | FranchisingAboutSectionSlice
    | undefined;
  const getStartedSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_get_started_section') as
    | FranchisingGetStartedSectionSlice
    | undefined;
  const formSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_form_section') as
    | FranchisingFormSectionSlice
    | undefined;

  return (
    <>
      {headerSlice ? <HeaderSection slice={headerSlice} /> : null}
      <VideoSection />
      {howToSlice ? <HowToSection slice={howToSlice} /> : null}
      {menuSection ? <MenuSection slice={menuSection} /> : null}
      {purposeSection ? <PurposeSection slice={purposeSection} /> : null}
      {aboutSection ? <AboutSection slice={aboutSection} /> : null}
      {getStartedSection ? <GetStartedSection slice={getStartedSection} /> : null}
      {formSection ? <FormSection slice={formSection} /> : null}
    </>
  );
};

export default Franchising;
