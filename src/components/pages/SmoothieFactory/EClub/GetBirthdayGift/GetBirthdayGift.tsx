'use client';

import { Wrapper, Title, Text, ContentWrapper } from './GetBirthdayGift.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { MaxWidthWrapper, Super } from '@styles/common';
import { BirthdayGiftSlice } from 'prismicio-types';

const GetBirthdayGift: FC<{ slice: BirthdayGiftSlice }> = ({
  slice: {
    primary: { title, text, button },
  },
}) => (
  <MaxWidthWrapper>
    <Wrapper>
      <FloatingImage
        alt="e-club bg"
        height="clamp(420px, 55.62vw, 841px)"
        src="/images/Frame 170.png"
        width="clamp(285px,37.76vw, 571px)"
      />
      <ContentWrapper>
        <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
        <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
        <a href="#form-bg">
          <CtaButton dangerouslySetInnerHTML={{ __html: button as string }}></CtaButton>
        </a>
      </ContentWrapper>
    </Wrapper>
  </MaxWidthWrapper>
);

export default GetBirthdayGift;
