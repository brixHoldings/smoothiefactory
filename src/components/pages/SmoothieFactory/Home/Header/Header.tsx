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

const Header: FC = () => (
  <>
    <HeaderArea>
      <Image alt="bg" src="/images/header-area-image2.jpg" style={{ objectFit: 'cover' }} fill />
      <CtaArea>
        <HeaderTitle>building a better you</HeaderTitle>
        <HeaderText>
          Smoothie Factory + Kitchen is for both athletes and those who want to pursue a more active lifestyle. Also,
          for those looking for a snack or light meal to provide energy and nutrition of fruits and vegetables without
          added preservatives or sugar.
        </HeaderText>
        <Link href="/about-us">
          <HeaderButton>Become a part of the family</HeaderButton>
        </Link>
      </CtaArea>
      <FloatingGlassImage
        alt="glass of smoothie"
        height="clamp(180px,49.60vw, 750px)"
        src="/images/header-glass.png"
        width="clamp(249px,37.03vw, 560px)"
      />
    </HeaderArea>
    <LottieWrapper>
      <Lottie animationData={oneAtATime} />
    </LottieWrapper>
  </>
);

export default Header;
