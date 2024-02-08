'use client';

import {
  Wrapper,
  HowDoesItWorkTitle,
  Step,
  Steps,
  StepTitle,
  StepSubtitle,
  StepContent,
  RelativeWrapper,
} from './HowDoesItWork.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';
import { HowDoesItWorkSlice } from 'prismicio-types';

const HowDoesItWork: FC<{ slice: HowDoesItWorkSlice }> = ({
  slice: {
    primary: { maintitle, first_step, second_step, third_step },
  },
}) => {
  return (
    <RelativeWrapper>
      <MaxWidthWrapper>
        <FloatingImage
          alt="wood shape"
          bottom="30%"
          height="clamp(433px ,42.98vw, 650px)"
          hideUnder={650}
          left="-66%"
          src="/images/Mask group (1).png"
          width="clamp(420px,41.73vw, 631px)"
        />
        <FloatingImage
          alt="green shape"
          height="clamp(817px, 83.20vw, 1258px)"
          hideUnder={650}
          right="76%"
          src="/images/WoodShapes-2.png"
          top="-11%"
          width="clamp(816px,82.01vw, 1240px)"
        />
        <Wrapper>
          <FloatingImage
            alt="leaf icon"
            height="clamp(61px ,5.42vw, 82px)"
            src="/images/green-leaf.svg"
            style={{ marginBottom: 'clamp(17px,1.71vw, 26px)' }}
            width="clamp(59px,5.22vw, 79px)"
          />
          <HowDoesItWorkTitle dangerouslySetInnerHTML={{ __html: maintitle as string }}></HowDoesItWorkTitle>
          <Steps>
            <Step>
              <StepContent>
                <StepTitle color="#F69F24">01</StepTitle>
                <StepSubtitle color="#F69F24" dangerouslySetInnerHTML={{ __html: first_step as string }}></StepSubtitle>
              </StepContent>
              <FloatingImage alt="sign up" height="150px" src="/images/Frame 109.png" width="150px" />
            </Step>
            <Step>
              <FloatingImage alt="sign up" height="150px" src="/images/Frame 110.png" width="150px" />
              <StepContent alignStart>
                <StepTitle color="#98C44A">02</StepTitle>
                <StepSubtitle
                  color="#98C44A"
                  dangerouslySetInnerHTML={{ __html: second_step as string }}
                ></StepSubtitle>
              </StepContent>
            </Step>
            <Step>
              <StepContent>
                <StepTitle color="#23AA5D">03</StepTitle>
                <StepSubtitle color="#23AA5D" dangerouslySetInnerHTML={{ __html: third_step as string }}></StepSubtitle>
              </StepContent>
              <FloatingImage alt="sign up" height="150px" src="/images/Frame 110 (1).png" width="150px" />
            </Step>
          </Steps>
        </Wrapper>
      </MaxWidthWrapper>
    </RelativeWrapper>
  );
};

export default HowDoesItWork;
