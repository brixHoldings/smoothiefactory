'use client';

import { Wrapper, Title, Text, ContentWrapper } from './GetBirthdayGift.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import Image from 'next/image';
import type { FC } from 'react';
import { MaxWidthWrapper } from '@styles/common';
import { BirthdayGiftSlice } from 'prismicio-types';
import MobileAppButtons from '@components/ui/MobileAppButtons/MobileAppButtons';

const GetBirthdayGift: FC<{ slice: BirthdayGiftSlice }> = ({
  slice: {
    primary: { title, text },
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
        <MobileAppButtons />
      </ContentWrapper>
    </Wrapper>
  </MaxWidthWrapper>
);

export default GetBirthdayGift;
