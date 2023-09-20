'use client';

import { MaxWidthWrapper } from '@styles/common';

import {
  Title,
  Wrapper,
  Cards,
  Card,
  GiftCardArea,
  GiftCard,
  BlackBar,
  GiftCardTitle,
  GiftCardText,
  GiftCardContent,
  FloatingCardImage,
  LottieWrapper,
} from './ChooseDesigns.style';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

import oneAtATime from '../../../../../../public/lottie/oneAtATime.json';

const slides = [
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
  { src: '/images/card (3).png' },
  { src: '/images/card (1).png' },
  { src: '/images/card.png' },
];

const ChooseDesigns: FC = () => (
  <>
    <MaxWidthWrapper>
      <Wrapper>
        <Title>
          Choose from <br /> multiple designs...
        </Title>
        <CtaButton>Get a gift card</CtaButton>
      </Wrapper>
    </MaxWidthWrapper>
    <Cards>
      {slides.map((slide, index) => (
        <Card key={index}>
          <Image alt="gift card" src={slide.src} style={{ objectFit: 'cover' }} fill />
        </Card>
      ))}
    </Cards>
    <GiftCardArea>
      <LottieWrapper>
        <Lottie animationData={oneAtATime} />
      </LottieWrapper>
      <Image alt="gift card" src="/images/big-salad.jpg" style={{ objectFit: 'cover' }} fill />
      <GiftCard>
        <BlackBar />
        <GiftCardContent>
          <GiftCardTitle>Already have a giftcard?</GiftCardTitle>
          <GiftCardText>It’s easy to check your balance and review transactions.</GiftCardText>
          <CtaButton>Check your balance</CtaButton>
        </GiftCardContent>
        <FloatingCardImage
          alt="gift card"
          bottom="-27%"
          height="clamp(82px,7.80vw, 118px)"
          right="-34%"
          src="/images/card-icon.svg"
          width="clamp(80px,7.53vw, 114px)"
        />
      </GiftCard>
    </GiftCardArea>
  </>
);

export default ChooseDesigns;
