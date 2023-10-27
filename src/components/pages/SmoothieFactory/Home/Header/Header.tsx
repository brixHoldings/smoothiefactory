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
import { Super } from '@styles/common';

const Header: FC = () => (
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
        <HeaderTitle>
          building a better you<Super>®</Super>
        </HeaderTitle>
        <HeaderText>
          Smoothie Factory + Kitchen<Super>TM</Super> is for both athletes and those who want to pursue a more active
          lifestyle. Also, for those looking for a snack or light meal to provide energy and nutrition of fruits and
          vegetables without added preservatives or sugar.
        </HeaderText>
        <Link href="/e-club-signup">
          <HeaderButton>Become a part of the family</HeaderButton>
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

export default Header;
