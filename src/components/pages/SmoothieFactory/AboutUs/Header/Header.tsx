'use client';
import Lottie from 'lottie-react';

import {
  FloatingShapeImage,
  Wrapper,
  Content,
  SideImage,
  Title,
  Text,
  RelativeWrapper,
  HeaderMaxWidthWrapper,
  LottieWrapper,
} from './Header.style';

import type { FC } from 'react';
import Image from 'next/image';

import oneAtATime from '../../../../../../public/lottie/oneAtATime.json';
import { AboutUsHeaderAreaSlice } from 'prismicio-types';

const Header: FC<{ slice: AboutUsHeaderAreaSlice }> = ({
  slice: {
    primary: { title, text },
  },
}) => {
  return (
    <RelativeWrapper>
      <FloatingShapeImage
        priority
        alt="about us bg"
        height="clamp(392px, 46.09vw, 697px)"
        left="0%"
        src="/images/cyan-shape.svg"
        top="0%"
        width="clamp(381px,44.84vw, 678px)"
      />
      <HeaderMaxWidthWrapper>
        <Wrapper>
          <Content>
            <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
            <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
          </Content>
          <SideImage>
            <Image
              priority
              alt="about us side image"
              src="/images/side-img-1.jpg"
              style={{
                objectFit: 'cover',
              }}
              fill
            />
          </SideImage>
        </Wrapper>
      </HeaderMaxWidthWrapper>
      <LottieWrapper>
        <Lottie animationData={oneAtATime} />
      </LottieWrapper>
    </RelativeWrapper>
  );
};

export default Header;
