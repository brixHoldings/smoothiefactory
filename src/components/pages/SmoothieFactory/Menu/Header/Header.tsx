'use client';

import Image from 'next/image';

import { HeaderArea, CtaArea, HeaderTitle, FloatingGlassImage } from './Header.style';

import type { FC } from 'react';

const Header: FC = () => (
  <HeaderArea>
    <Image alt="bg" src="/images/Apples.png" style={{ objectFit: 'cover', objectPosition: 'bottom center' }} fill />
    <CtaArea>
      <HeaderTitle>Carefully curated foods and drinks for your best performance</HeaderTitle>
    </CtaArea>
    <FloatingGlassImage
      priority
      alt="glass of smoothie"
      height="clamp(212px,27.05vw, 409px)"
      src="/images/SF+K Juice triple 1.png"
      width="clamp(261px,44.37vw, 671px)"
    />
  </HeaderArea>
);

export default Header;
