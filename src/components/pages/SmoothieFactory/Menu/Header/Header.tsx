// @ts-nocheck
'use client';

import Image from 'next/image';

import { HeaderArea, CtaArea, HeaderTitle, FloatingGlassImage } from './Header.style';

import type { FC } from 'react';

const Header: FC = ({
  page,
  slice: {
    primary: { text, image },
  },
}) => {
  console.log(878, page);
  return (
    <HeaderArea>
      <Image alt="bg" src="/images/Apples.png" style={{ objectFit: 'cover', objectPosition: 'bottom center' }} fill />
      <CtaArea>
        <HeaderTitle dangerouslySetInnerHTML={{ __html: text }}></HeaderTitle>
      </CtaArea>
      <FloatingGlassImage
        priority
        height="clamp(212px,27.05vw, 409px)"
        field={image}
        width="clamp(261px,44.37vw, 671px)"
      />
    </HeaderArea>
  );
};

export default Header;
