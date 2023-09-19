'use client';

import Lottie from 'lottie-react';

import {
  RelativeWrapper,
  BlendTogetherTitle,
  JoinOurClubSection,
  JoinOurWrapper,
  JoinOurClubTitle,
  JoinOurClubText,
  GetAGiftCardText,
  FloatingEClubImage,
  GetAGiftCardTitle,
  GetAGiftCardWrapper,
  FloatingGetAGiftCardImage,
  FloatingGreenBubbleImage,
  LottieWrapper,
  Polygon,
} from './BlendTogether.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';

import { CtaButton } from '../WhatIsNew/WhatIsNew.style';

import letsBlendTogether from '../../../../../../public/lottie/letsBlendTogether.json';

import type { FC } from 'react';
import Link from 'next/link';

const BlendTogether: FC = () => (
  <>
    <MaxWidthWrapper>
      <RelativeWrapper>
        <FloatingGreenBubbleImage
          alt="green bubble"
          height="clamp(822px, 68.78vw, 1040px)"
          right="76%"
          src="/images/green-bubble-bg.svg"
          top="4%"
          width="clamp(811px, 66.86vw, 1011px)"
        />
        <FloatingImage
          alt="radish"
          height="clamp(389px, 34.32vw, 519px)"
          hideUnder={768}
          right="27%"
          src="/images/radish.png"
          top="56%"
          width="clamp(224px, 19.77vw, 299px)"
        />
        <BlendTogetherTitle>Let’s blend together</BlendTogetherTitle>
        <JoinOurClubSection>
          <JoinOurWrapper>
            <svg fill="none" height="83" style={{ marginBottom: '16px' }} viewBox="0 0 79 83" width="79">
              <path
                d="M62.14 71.0084c-9.0058 8.9508-24.0449 10.8624-27.9722 11.2172 5.9904-3.7701 11.4402-8.4598 16.6506-13.213 5.2135-4.7558 10.9886-9.7866 14.8288-15.7406.2676-.4145-.1969-1.0606-.642-.6856-5.7407 4.8381-10.5145 10.8709-16.0621 15.9678-5.0384 4.6289-10.4874 8.7589-15.6374 13.2463.8499-3.4571 6.669-25.6545 17.7972-33.3975 12.0798-8.4056 27.8972-7.0728 27.8972-7.0728S72.562 60.6506 62.14 71.0084Zm-26.9808-31.851c5.904 18.0166-2.7482 39.6681-3.8891 42.3873-.3598-12.1119-2.3988-24.0969-5.9992-35.6728-2.7914-8.9764-5.9391-19.832-13.5399-25.9019-.5215-.4164-1.3324.2887-.8744.8201 13.5804 15.7395 16.5993 39.6708 18.823 59.7873C23.9282 75.5317 2.94536 56.0783.464403 38.7601-2.41341 18.6674 9.02445 0 9.02445 0S28.848 19.8985 35.1592 39.1574Z"
                fill="#98C44A"
              />
            </svg>
            <JoinOurClubTitle>
              Join our Factory <br /> Fan E-Club
            </JoinOurClubTitle>
            <JoinOurClubText>to get the best offers</JoinOurClubText>
            <Link href="/e-club">
              <CtaButton>join e-club</CtaButton>
            </Link>
          </JoinOurWrapper>
          <FloatingEClubImage
            alt="join our club"
            height="clamp(196px, 16.53vw, 250px)"
            src="/images/Frame 109.svg"
            width="clamp(196px, 16.53vw, 250px)"
          />
        </JoinOurClubSection>
        <JoinOurClubSection>
          <FloatingGetAGiftCardImage
            alt="get a gift card"
            height="clamp(196px,  16.53vw, 250px)"
            src="/images/Frame 109 (1).svg"
            width="clamp(196px,  16.53vw, 250px)"
          />
          <GetAGiftCardWrapper>
            <GetAGiftCardTitle>Get a gift card</GetAGiftCardTitle>
            <GetAGiftCardText>for that special person</GetAGiftCardText>
            <Link href="/gift-cards">
              <CtaButton>gift cards</CtaButton>
            </Link>
          </GetAGiftCardWrapper>
        </JoinOurClubSection>
      </RelativeWrapper>
    </MaxWidthWrapper>
    <Polygon>
      <LottieWrapper>
        <Lottie animationData={letsBlendTogether} />
      </LottieWrapper>
    </Polygon>
  </>
);

export default BlendTogether;
