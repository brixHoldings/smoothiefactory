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
} from './HeaderSection.styles';

import type { FC } from 'react';
import { FranchisingHeaderSlice } from 'prismicio-types';

const HeaderSection: FC<{
  slice: FranchisingHeaderSlice;
}> = ({
  slice: {
    items,
    primary: { title, text, button },
  },
}) => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView();
  }, []);

  return (
    <SectionContainer>
      <FullWidthContentContainer>
        <MobileContainer>
          <ContentContainer>
            <TextContent>
              <MainText>
                {title}
                <LeafImage alt="main-content-image" src="/images/SmoothieFactoryLeafImage.png" />
              </MainText>
              <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>

              <Button label={button as string} onClick={onClickHandle} />
            </TextContent>

            <MainContentImage alt="main-content-image" src="/images/smoothieFactoryHeaderMainImage.png" />
            <MainContentCircularImage alt="main-content-image" src="/images/SmoothieFactoryHeaderCircular.png" />
          </ContentContainer>
          <FullWidthCircularDiv />
        </MobileContainer>
      </FullWidthContentContainer>
      <BottomContentContainer>
        <MobileContainer>
          <CardsContainer>
            {items.map(({ badge_text }) => (
              <CardContentContainer key={badge_text}>
                <StyledSVG />
                <CardText>{badge_text}</CardText>
              </CardContentContainer>
            ))}
          </CardsContainer>
        </MobileContainer>
      </BottomContentContainer>
    </SectionContainer>
  );
};

export default HeaderSection;
