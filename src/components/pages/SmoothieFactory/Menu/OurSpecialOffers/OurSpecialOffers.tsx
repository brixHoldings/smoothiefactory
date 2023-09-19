'use client';

import {
  Title,
  GreenBg,
  ContentWrapper,
  FloatingSmoothiesImage,
  SpecialOfferMaxWidthWrapper,
  OurNewFlavors,
  OurNewFlavorsTitle,
  OurNewFlavorsText,
  FloatingBgShapeImage,
} from './OurSpecialOffers.style';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const OurSpecialOffers: FC = () => (
  <>
    <Title>Our special offers</Title>
    <GreenBg>
      <FloatingImage
        alt="stamp"
        height="clamp(98px,11.50vw, 174px)"
        right="-50%"
        src="/images/stamp.png"
        style={{ zIndex: 1 }}
        top="-70%"
        width="clamp(99px,11.70vw, 177px)"
      />

      <SpecialOfferMaxWidthWrapper>
        <ContentWrapper>
          <FloatingSmoothiesImage
            alt="smoothies"
            height="100%"
            imageStyle={{ objectFit: 'cover' }}
            src="/images/Smoothiegroup_Smoothie_Factory_010_5_ 1.jpg"
            width="clamp(491px,42.59vw, 644px)"
          />
          <OurNewFlavors>
            <FloatingBgShapeImage
              alt="bg"
              height="clamp(337px, 29.76vw, 450px)"
              right="104%"
              src="/images/ShapeGreen.svg"
              width="clamp(328px,28.96vw, 438px)"
            />
            <OurNewFlavorsTitle>OUR NEW FLAVORS</OurNewFlavorsTitle>
            <OurNewFlavorsText>
              Looking for a refreshing, delicious, and healthy way to quench your thirst? Our menu offers a wide range
              of flavors, from classic favorites to unique and exciting blends. Whether you&apos;re in the mood for
              something fruity and refreshing or something indulgent and chocolatey, we&apos;ve got you covered. And
              with our commitment to using only the freshest, high-quality ingredients, you can be sure that every sip
              is packed with flavor and nutrition.
            </OurNewFlavorsText>
            <CtaButton>SEE OUR OFFERS</CtaButton>
          </OurNewFlavors>
        </ContentWrapper>
      </SpecialOfferMaxWidthWrapper>
    </GreenBg>
  </>
);

export default OurSpecialOffers;
