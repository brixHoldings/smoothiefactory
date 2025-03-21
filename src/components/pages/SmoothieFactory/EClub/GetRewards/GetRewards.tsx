'use client';

import Lottie from 'lottie-react';

import { FloatingBgImage, Glass, GlassTitle, GlassText, Wrapper, LottieWrapper } from './GetRewards.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import oneAtATime from '../../../../../../public/lottie/oneAtATime.json';

import Image from 'next/image';
import type { FC } from 'react';
import { EClubHeaderSlice } from 'prismicio-types';
import MobileAppButtons from '@components/ui/MobileAppButtons/MobileAppButtons';

const GetRewards: FC<{ slice: EClubHeaderSlice }> = ({
  slice: {
    primary: { title, text },
  },
}) => {
  return (
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
        src="/images/pexels-dominika-roseclay-2090903-transformed 2.png"
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
        <GlassTitle dangerouslySetInnerHTML={{ __html: title as string }}></GlassTitle>
        <GlassText dangerouslySetInnerHTML={{ __html: text as string }}></GlassText>
        <MobileAppButtons />
      </Glass>
      <LottieWrapper>
        <Lottie animationData={oneAtATime} />
      </LottieWrapper>
    </Wrapper>
  );
};

export default GetRewards;
