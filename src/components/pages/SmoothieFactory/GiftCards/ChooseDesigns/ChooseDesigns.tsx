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
import { ChoseDesignsSlice } from 'prismicio-types';

const slides = [
  { src: '/images/Gift Cards_.png' },
  { src: '/images/Gift Cards_5.png' },
  { src: '/images/Gift Cards_7.png' },
  { src: '/images/Gift Cards_3.png' },
  { src: '/images/Gift Cards_6.png' },
  { src: '/images/Gift Cards_.png' },
  { src: '/images/Gift Cards_5.png' },
  { src: '/images/Gift Cards_7.png' },
  { src: '/images/Gift Cards_3.png' },
  { src: '/images/Gift Cards_6.png' },
  { src: '/images/Gift Cards_.png' },
  { src: '/images/Gift Cards_5.png' },
  { src: '/images/Gift Cards_7.png' },
  { src: '/images/Gift Cards_3.png' },
  { src: '/images/Gift Cards_6.png' },
  { src: '/images/Gift Cards_.png' },
  { src: '/images/Gift Cards_5.png' },
  { src: '/images/Gift Cards_7.png' },
  { src: '/images/Gift Cards_3.png' },
  { src: '/images/Gift Cards_6.png' },
  { src: '/images/Gift Cards_.png' },
  { src: '/images/Gift Cards_5.png' },
  { src: '/images/Gift Cards_7.png' },
  { src: '/images/Gift Cards_3.png' },
  { src: '/images/Gift Cards_6.png' },
];

const ChooseDesigns: FC<{ slice: ChoseDesignsSlice }> = ({
  slice: {
    primary: { title, button, gift_card_title, gift_card_text, gift_card_button },
  },
}) => {
  return (
    <>
      <MaxWidthWrapper>
        <Wrapper>
          <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
          <a href="https://smoothiefactory.myguestaccount.com/guest/egift?page=cardInfo" target="_blank">
            <CtaButton dangerouslySetInnerHTML={{ __html: button as string }}></CtaButton>
          </a>
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
            <GiftCardTitle dangerouslySetInnerHTML={{ __html: gift_card_title as string }}></GiftCardTitle>
            <GiftCardText dangerouslySetInnerHTML={{ __html: gift_card_text as string }}></GiftCardText>
            <a href="https://smoothiefactory.myguestaccount.com/guest/nologin/account-balance" target="_blank">
              <CtaButton dangerouslySetInnerHTML={{ __html: gift_card_button as string }}></CtaButton>
            </a>
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
};

export default ChooseDesigns;
