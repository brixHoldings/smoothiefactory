'use client';

import {
  WhatsNewWrapper,
  WhatsNewTitle,
  WhatsNewSubtitle,
  TextContainer,
  WhatsNewText,
  RelativeWrapper,
  CtaButton,
  StyledMaxWidthWrapper,
} from './WhatIsNew.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import type { FC } from 'react';

const WhatIsNew: FC = () => (
  <StyledMaxWidthWrapper>
    <FloatingImage
      alt="arugula"
      top="-47%"
      right="0%"
      height="clamp(285px,33.53vw, 507px)"
      src="/images/pexels-mali-maeder-244393-transformed (2) 1.png"
      width="clamp(164px,19.24vw, 291px)"
    />
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
          bottom="23%"
          height="clamp(195px,26.32vw, 398px)"
          left="-13%"
          src="/images/cancer5443_fresh_juicy_slice_cucumber_on_a_white_background_iso_10442f18-fd39-4727-a315-877f198b4bd6.png"
          width="clamp(195px,26.32vw, 398px)"
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
  </StyledMaxWidthWrapper>
);

export default WhatIsNew;
