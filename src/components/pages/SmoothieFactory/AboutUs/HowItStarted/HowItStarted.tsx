'use client';

import Image from 'next/image';
import { MaxWidthWrapper, Super } from '@styles/common';

import type { FC } from 'react';
import { Title } from '../../Home/common';

import {
  ContentWrapper,
  FloatingOrangeShapeImage,
  Text,
  WoodBg,
  PersonCard,
  CardTitle,
  WoodBgTitle,
  StoreBg,
  CardsWrapper,
  Card,
  InfoCardTitle,
  InfoCardText,
  FlexWrapper,
  FloatingGreenShapeImage,
  FloatingCucumber,
  FloatingIconImage,
  CtaButton,
} from './HowItStarted.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';
import Link from 'next/link';
import { HowItStartedSlice } from 'prismicio-types';

const HowItStarted: FC<{ slice: HowItStartedSlice }> = ({
  slice: {
    primary: {
      left_title,
      left_text,
      right_title,
      right_text,
      person_card_title,
      person_card_side_text,
      info_title,
      first_info_card_title,
      first_info_card_text,
      second_info_card_title,
      second_info_card_text,
      second_info_card_button,
      third_info_card_title,
      third_info_card_text,
    },
  },
}) => {
  const { width } = useWindowSize();

  const isMobile = width <= theme.breakpoints.tablet;

  return (
    <>
      <MaxWidthWrapper>
        <FlexWrapper>
          <ContentWrapper>
            <FloatingOrangeShapeImage
              alt="orange shape"
              height="clamp(270px, 40.542vw, 613px)"
              src="/images/orange-and-shape.png"
              style={{ zIndex: -1 }}
              width="clamp(262px, 30.88vw, 467px)"
            />

            <Title
              color="#ED6C32"
              mb="clamp(16px,2.11vw, 24px)"
              style={{ textAlign: 'center' }}
              dangerouslySetInnerHTML={{ __html: left_title as string }}
            ></Title>
            <Text dangerouslySetInnerHTML={{ __html: left_text as string }}></Text>
          </ContentWrapper>
          <ContentWrapper>
            <FloatingGreenShapeImage
              alt="green shape"
              height="clamp(270px, 40.542vw, 491.09px)"
              src="/images/Vector.png"
              style={{ opacity: 0.2, zIndex: -1 }}
              width="clamp(262px, 30.88vw, 456.37px)"
            />

            <Title
              color="#23AA5D"
              mb="clamp(16px,2.11vw, 24px)"
              style={{ textAlign: 'center' }}
              dangerouslySetInnerHTML={{ __html: right_title as string }}
            ></Title>
            <Text dangerouslySetInnerHTML={{ __html: right_text as string }}></Text>
            <FloatingCucumber
              alt="green shape"
              height="clamp(112px, 19.37vw, 293px)"
              src="/images/cancer5443_single_slice_cucumber_on_a_white_background_top-down_1b140dba-f82e-4cae-8427-45eb082b770b.png"
              style={{ zIndex: -1 }}
              width="clamp(112px, 19.37vw, 293px)"
            />
          </ContentWrapper>
        </FlexWrapper>
      </MaxWidthWrapper>
      <WoodBg>
        {isMobile ? (
          <Image alt="wood bg" src="/images/wood-mobile-bg.png" fill />
        ) : (
          <Image alt="wood bg" src="/images/about-you-wood-bg.png" style={{ objectFit: 'cover' }} fill />
        )}
        <PersonCard>
          <FloatingImage
            alt="person"
            height="clamp(229px,28.04vw, 424px)"
            src="/images/Smoothie Drinker.jpg"
            style={{ marginBottom: 'clamp(23px,2.91vw, 44px)' }}
            width="clamp(229px,27.97vw, 423px)"
          />
          <CardTitle dangerouslySetInnerHTML={{ __html: person_card_title as string }}></CardTitle>
        </PersonCard>
        <WoodBgTitle dangerouslySetInnerHTML={{ __html: person_card_side_text as string }}></WoodBgTitle>
        <FloatingImage
          alt="apple"
          bottom="-10%"
          height="clamp(129px,15.27vw, 231px )"
          right="-35%"
          src="/images/apple.png"
          width="clamp(132px,15.60vw, 236px)"
        />
      </WoodBg>
      <StoreBg>
        <Image alt="store bg" src="/images/DSC00808 (1).jpg" style={{ objectFit: 'cover' }} fill />
      </StoreBg>
      <MaxWidthWrapper>
        <Title
          color="#23AA5D"
          mb="clamp(32px, 6.81vw, 103px)"
          style={{ textAlign: 'center' }}
          dangerouslySetInnerHTML={{ __html: info_title as string }}
        ></Title>
        <CardsWrapper>
          <Card>
            <FloatingIconImage
              alt="card image"
              height="clamp(90px, 7.93vw, 120px)"
              src="/images/stars.svg"
              width="clamp(90px, 7.93vw, 120px)"
            />
            <InfoCardTitle dangerouslySetInnerHTML={{ __html: first_info_card_title as string }}></InfoCardTitle>
            <InfoCardText dangerouslySetInnerHTML={{ __html: first_info_card_text as string }}></InfoCardText>
          </Card>
          <Card>
            <FloatingIconImage
              alt="card image"
              height="clamp(90px, 7.93vw, 120px)"
              src="/images/avocado-icon.svg"
              width="clamp(90px, 7.93vw, 120px)"
            />
            <InfoCardTitle dangerouslySetInnerHTML={{ __html: second_info_card_title as string }}></InfoCardTitle>
            <InfoCardText dangerouslySetInnerHTML={{ __html: second_info_card_text as string }}></InfoCardText>
            <Link href="/franchising">
              <CtaButton dangerouslySetInnerHTML={{ __html: second_info_card_button as string }}></CtaButton>
            </Link>
          </Card>
          <Card>
            <FloatingIconImage
              alt="card image"
              height="clamp(90px, 7.93vw, 120px)"
              src="/images/orange-icon.svg"
              width="clamp(90px, 7.93vw, 120px)"
            />
            <InfoCardTitle dangerouslySetInnerHTML={{ __html: third_info_card_title as string }}></InfoCardTitle>
            <InfoCardText dangerouslySetInnerHTML={{ __html: third_info_card_text as string }}></InfoCardText>
          </Card>
        </CardsWrapper>
      </MaxWidthWrapper>
    </>
  );
};

export default HowItStarted;
