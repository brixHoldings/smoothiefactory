'use client';

import {
  WhatsNewWrapper,
  WhatsNewTitle,
  WhatsNewSubtitle,
  TextContainer,
  WhatsNewText,
  RelativeWrapper,
  CtaButton,
} from './WhatIsNew.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';

const WhatIsNew: FC = () => (
  <MaxWidthWrapper>
    <WhatsNewWrapper>
      <RelativeWrapper>
        <FloatingImage
          alt="smoothie kitchen"
          height="clamp(330px,38.88vw, 588px)"
          src="/images/smoothie-kitchen3.png"
          width="clamp(302px,35.58vw, 538px)"
        />
        <FloatingImage
          alt="kiwi"
          bottom="-13%"
          height="clamp(163px,16.26vw, 246px)"
          left="-3%"
          src="/images/kiwi.png"
          width="clamp(195px,19.44vw, 294px)"
        />
      </RelativeWrapper>
      <TextContainer>
        <WhatsNewTitle>What is new?</WhatsNewTitle>
        <WhatsNewSubtitle>SMOOTHIE FACTORY + KITCHEN</WhatsNewSubtitle>
        <WhatsNewText>
          Introducing Smoothie Factory + Kitchen, the newest addition to Smoothie Factory! Enjoy delicious, healthy
          smoothies and freshly made toasts, grilled folds, and salads.
        </WhatsNewText>
        <CtaButton>SEE OUR OFFERS</CtaButton>
      </TextContainer>
    </WhatsNewWrapper>
  </MaxWidthWrapper>
);

export default WhatIsNew;
