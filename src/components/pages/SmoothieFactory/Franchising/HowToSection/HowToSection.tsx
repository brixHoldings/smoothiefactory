'use client';

import {
  BackgroundContainer,
  Container,
  StepContainer,
  StepContent,
  StepDescription,
  StepNumber,
  StepTitle,
  TitlePartOne,
  TitlePartTwo,
} from './HowToSection.styles';

import type { FC } from 'react';
import { FranchisingHowToSlice } from 'prismicio-types';

const HowToSection: FC<{ slice: FranchisingHowToSlice }> = ({
  slice: {
    items,
    primary: { title_1, title_2 },
  },
}) => (
  <BackgroundContainer>
    <Container>
      <TitlePartOne dangerouslySetInnerHTML={{ __html: title_1 as string }}></TitlePartOne>
      <TitlePartTwo dangerouslySetInnerHTML={{ __html: title_2 as string }}></TitlePartTwo>
      {items.map(({ title, text }, index) => (
        <StepContainer key={index}>
          <StepNumber>{index + 1}.</StepNumber>
          <StepContent>
            <StepTitle dangerouslySetInnerHTML={{ __html: title as string }}></StepTitle>
            <StepDescription dangerouslySetInnerHTML={{ __html: text as string }} />
          </StepContent>
        </StepContainer>
      ))}
    </Container>
  </BackgroundContainer>
);

export default HowToSection;
