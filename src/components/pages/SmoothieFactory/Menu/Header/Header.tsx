'use client';

import Image from 'next/image';

import { HeaderArea, CtaArea, HeaderTitle, FloatingGlassImage } from './Header.style';

import type { FC } from 'react';
import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

const Header: FC = () => (
  <HeaderArea>
    <Image alt="bg" src="/images/Apples.png" style={{ objectFit: 'cover', objectPosition: 'bottom center' }} fill />
    <CtaArea>
      <FloatingImage
        priority
        alt="header icon"
        height="clamp(90px,7.80vw, 118px)"
        src="/images/header-icon.svg"
        style={{ marginBottom: 'clamp(26px,1.98vw, 30px)' }}
        width="clamp(90px,7.80vw, 118px)"
      />
      <HeaderTitle>Carefully curated foods and drinks for your best performance</HeaderTitle>
    </CtaArea>
    <FloatingGlassImage
      priority
      alt="glass of smoothie"
      height="clamp(423px,36.37vw, 550px)"
      src="/images/Citrus Greens Final.png"
      width="clamp(566px,48.74vw, 737px)"
    />
  </HeaderArea>
);

export default Header;
