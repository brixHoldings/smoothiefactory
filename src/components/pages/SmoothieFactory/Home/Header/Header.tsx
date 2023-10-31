// @ts-nocheck
'use client';

import Image from 'next/image';
import Lottie from 'lottie-react';

import {
  HeaderArea,
  CtaArea,
  HeaderTitle,
  HeaderText,
  HeaderButton,
  FloatingGlassImage,
  LottieWrapper,
} from './Header.style';

import oneAtATime from '../../../../../../public/lottie/oneAtATime.json';

import type { FC } from 'react';
import Link from 'next/link';

const Header: FC = ({
  slice: {
    primary: { title, text, button },
  },
}) => {
  return (
    <>
      <HeaderArea>
        <Image
          priority
          alt="bg"
          src="/images/header-area-image2.jpg"
          style={{ objectFit: 'cover', objectPosition: 'bottom ' }}
          fill
        />
        <CtaArea>
          <HeaderTitle dangerouslySetInnerHTML={{ __html: `${title}` }}></HeaderTitle>
          <HeaderText dangerouslySetInnerHTML={{ __html: `${text}` }}></HeaderText>
          <Link href="/e-club">
            <HeaderButton dangerouslySetInnerHTML={{ __html: `${button}` }}></HeaderButton>
          </Link>
          <FloatingGlassImage
            priority
            alt="glass of smoothie"
            width="clamp(249px,39.68vw, 600px)"
            src="/images/Citrus Greens Final (4).png"
            height="clamp(180px,29.62vw, 448px)"
          />
        </CtaArea>
      </HeaderArea>
      <LottieWrapper>
        <Lottie animationData={oneAtATime} />
      </LottieWrapper>
    </>
  );
};

export default Header;
