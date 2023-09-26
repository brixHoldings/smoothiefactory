'use client';

import Lottie from 'lottie-react';

import { FloatingBgImage, Glass, GlassTitle, GlassText, Wrapper, LottieWrapper } from './GetRewards.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';
import oneAtATime from '../../../../../../public/lottie/oneAtATime.json';

import type { FC } from 'react';
import Link from 'next/link';

const GetRewards: FC = () => (
  <Wrapper>
    <FloatingBgImage
      alt="e-club bg"
      height="clamp(720px, 77.24vw, 1168px)"
      right="3%"
      src="/images/e-club-bg-2.png"
      top="-2%"
      width="clamp(496px,65.67vw, 993px)"
      renderInBody
      priority
    />

    <FloatingImage
      alt="badge"
      priority
      bottom="-3%"
      height="clamp(183px, 21.62vw, 327px)"
      right="18%"
      src="/images/grapefruit.png"
      width="clamp(192px,22.61vw, 342px)"
    />
    <Glass>
      <FloatingImage
        alt="badge"
        height="clamp(105px, 12.43vw, 188px)"
        right="-23%"
        priority
        src="/images/Group 19.png"
        top="-50%"
        width="clamp(105px,12.43vw, 188px)"
      />
      <GlassTitle>GET OFFERS</GlassTitle>
      <GlassText>
        Are you a fan of healthy living and delicious smoothies? Then you don&apos;t want to miss out on our Factory Fan
        E-Club! Join now to receive exclusive offers and discounts on our fresh, nutritious menu items. Plus, stay up to
        date on all the latest news and promotions from Smoothie Factory + Kitchen. Sign up today and start enjoying the
        benefits of a healthy lifestyle!
      </GlassText>
      <a href="#form-bg">
        <CtaButton>Join now</CtaButton>
      </a>
    </Glass>
    <LottieWrapper>
      <Lottie animationData={oneAtATime} />
    </LottieWrapper>
  </Wrapper>
);

export default GetRewards;
