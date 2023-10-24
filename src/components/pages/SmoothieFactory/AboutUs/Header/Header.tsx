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

const Header: FC = () => (
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
          <Title>
            Building a <br /> better you<sup>®</sup>
          </Title>
          <Text>
            Smoothie Factory + Kitchen<sup>TM</sup> isn’t just for athletes. It’s for anyone who wants to pursue a more
            active lifestyle and is looking for a snack or meal replacement to provide the energy and nutrition of
            fruits and vegetables with no added sugars or preservatives.
          </Text>
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

export default Header;
