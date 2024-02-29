'use client';

import { useCallback } from 'react';

import Button from '@components/pages/SmoothieFactory/Button';
import MobileContainer from '@components/ui/MobileContainer';

import {
  BottomContentContainer,
  CardsContainer,
  CardText,
  ContentContainer,
  FullWidthCircularDiv,
  FullWidthContentContainer,
  MainContentImage,
  MainContentCircularImage,
  CardContentContainer,
  MainText,
  SectionContainer,
  Text,
  TextContent,
  StyledSVG,
  LeafImage,
  StyledMaxWidthWrapper,
} from './HeaderSection.styles';

import type { FC } from 'react';
import { FranchisingHeaderSlice } from 'prismicio-types';
import FormSection from '../FormSection';
import Image from 'next/image';

const HeaderSection: FC<{
  slice: FranchisingHeaderSlice;
}> = ({
  slice: {
    items,
    primary: { title, text, small_screen_text },
  },
}) => {
  return (
    <SectionContainer id="contact">
      <Image src="/images/slice18.jpg" alt="bg" fill style={{ zIndex: -1, objectFit: 'cover' }} />
      <ContentContainer>
        <StyledMaxWidthWrapper>
          <TextContent>
            <MainText>
              {title}
              <LeafImage alt="main-content-image" src="/images/SmoothieFactoryLeafImage.png" />
            </MainText>
            <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
          </TextContent>
          <FormSection smallScreenText={small_screen_text as string} />
        </StyledMaxWidthWrapper>
      </ContentContainer>
      <CardsContainer>
        {items.map(({ badge_text }) => (
          <CardContentContainer key={badge_text}>
            <StyledSVG />
            <CardText>{badge_text}</CardText>
          </CardContentContainer>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default HeaderSection;
