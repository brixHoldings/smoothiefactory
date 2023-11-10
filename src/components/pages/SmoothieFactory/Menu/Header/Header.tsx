'use client';

import Image from 'next/image';

import { HeaderArea, CtaArea, HeaderTitle, FloatingGlassImage } from './Header.style';

import type { FC } from 'react';
import { TextBlockSlice } from 'prismicio-types';

const Header: FC<{ slice: TextBlockSlice }> = ({
  slice: {
    primary: { text, image },
  },
}) => {
  return (
    <HeaderArea>
      <Image alt="bg" src="/images/Apples.png" style={{ objectFit: 'cover', objectPosition: 'bottom center' }} fill />
      <CtaArea>
        <HeaderTitle dangerouslySetInnerHTML={{ __html: text as string }}></HeaderTitle>
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
