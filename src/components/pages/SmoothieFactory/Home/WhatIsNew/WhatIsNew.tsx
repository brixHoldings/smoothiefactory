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
import Link from 'next/link';
import { HomeInfoSectionSliceDefault } from 'prismicio-types';

const WhatIsNew: FC<{ slice: HomeInfoSectionSliceDefault }> = ({
  slice: {
    primary: { title, subtitle, text, button, image },
  },
}) => {
  return (
    <RelativeWrapper>
      <FloatingImage
        alt="arugula"
        top="-47%"
        right="0%"
        height="clamp(285px,33.53vw, 507px)"
        src="/images/pexels-mali-maeder-244393-transformed (2) 1.png"
        width="clamp(164px,19.24vw, 291px)"
      />
      <StyledMaxWidthWrapper>
        <WhatsNewWrapper>
          <RelativeWrapper>
            <FloatingImage height="clamp(330px,38.88vw, 588px)" field={image} width="clamp(302px,35.58vw, 538px)" />
            <FloatingImage
              alt="cucumber"
              bottom="23%"
              height="clamp(195px,26.32vw, 398px)"
              left="-13%"
              src="/images/cancer5443_fresh_juicy_slice_cucumber_on_a_white_background_iso_10442f18-fd39-4727-a315-877f198b4bd6.png"
              width="clamp(195px,26.32vw, 398px)"
            />
          </RelativeWrapper>
          <TextContainer>
            <WhatsNewTitle dangerouslySetInnerHTML={{ __html: title as string }} />
            <WhatsNewSubtitle dangerouslySetInnerHTML={{ __html: subtitle as string }} />
            <WhatsNewText dangerouslySetInnerHTML={{ __html: text as string }} />
            <Link href="/menu">
              <CtaButton dangerouslySetInnerHTML={{ __html: button as string }} />
            </Link>
          </TextContainer>
        </WhatsNewWrapper>
      </StyledMaxWidthWrapper>
    </RelativeWrapper>
  );
};

export default WhatIsNew;
