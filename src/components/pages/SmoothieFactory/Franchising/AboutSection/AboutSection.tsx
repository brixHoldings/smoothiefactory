'use client';

import Image from 'next/image';
import { useCallback } from 'react';

import Button from '@components/pages/SmoothieFactory/Button';

import {
  Container,
  ContentLeft,
  ContentRight,
  Description,
  ImageContainer,
  Row,
  Subtitle,
  Title,
} from './AboutSection.styles';

import type { FC } from 'react';
import { FranchisingAboutSectionSlice } from 'prismicio-types';

const AboutSection: FC<{
  slice: FranchisingAboutSectionSlice;
}> = ({
  slice: {
    primary: {
      main_title,
      first_title,
      first_text,
      first_button,
      second_title,
      second_text,
      second_button,
      third_title,
      third_button,
      third_text,
    },
  },
}) => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView();
  }, []);

  return (
    <Container>
      <Title dangerouslySetInnerHTML={{ __html: main_title as string }}></Title>
      <Row>
        <ContentLeft>
          <Subtitle dangerouslySetInnerHTML={{ __html: first_title as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: first_text as string }}></Description>
          <Button label={first_button as string} onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={659} src="/images/sf-about-1.png" width={640} />
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer>
          <Image alt="first-row-image" height={659} src="/images/sf-about-2.png" width={640} />
        </ImageContainer>
        <ContentRight>
          <Subtitle dangerouslySetInnerHTML={{ __html: second_title as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: second_text as string }}></Description>
          <Button label={second_button as string} onClick={onClickHandle} />
        </ContentRight>
      </Row>
      <Row>
        <ContentLeft>
          <Subtitle dangerouslySetInnerHTML={{ __html: third_title as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: third_text as string }}></Description>
          <Button label={third_button as string} onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={653} src="/images/sf-about-3.png" width={640} />
        </ImageContainer>
      </Row>
    </Container>
  );
};

export default AboutSection;
