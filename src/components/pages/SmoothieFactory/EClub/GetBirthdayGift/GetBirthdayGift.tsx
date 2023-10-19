'use client';

import { Wrapper, Title, Text, ContentWrapper } from './GetBirthdayGift.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { MaxWidthWrapper } from '@styles/common';

const GetBirthdayGift: FC = () => (
  <MaxWidthWrapper>
    <Wrapper>
      <FloatingImage
        alt="e-club bg"
        height="clamp(420px, 55.62vw, 841px)"
        src="/images/Frame 170.png"
        width="clamp(285px,37.76vw, 571px)"
      />
      <ContentWrapper>
        <Title>Get the best birthday gift!</Title>
        <Text>
          Join the Smoothie Factory Fan E-Club and receive a special birthday treat! Celebrate your special day with a
          treat on us. As an e-club member, you&apos;ll get exclusive access to this birthday promo, as well as
          year-round discounts and offers. Don&apos;t miss out on this sweet treat! Sign up now and celebrate your
          birthday the healthy way.
        </Text>
        <a href="#form-bg">
          <CtaButton>Join now</CtaButton>
        </a>
      </ContentWrapper>
    </Wrapper>
  </MaxWidthWrapper>
);

export default GetBirthdayGift;
