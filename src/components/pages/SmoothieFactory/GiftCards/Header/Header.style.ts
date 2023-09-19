import styled from 'styled-components';

import theme from '@styles/theme';

import { MaxWidthWrapper } from '@styles/common';

export const Wrapper = styled.section`
  width: 100%;
  min-height: clamp(616px, 51.52vw, 779px);
  position: relative;
  margin-bottom: clamp(76px, 17.52vw, 265px);
`;

export const Glass = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  position: absolute;
  padding: clamp(52px, 10.38vw, 157px) clamp(32px, 7.93vw, 120px) clamp(70px, 13.88vw, 210px) clamp(32px, 7.93vw, 120px);
  top: 167px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: clamp(517px, 45.23vw, 684px);
  align-items: flex-start;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    top: 211px;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    top: 107px;
    min-width: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const RelativeMaxWidthWrapper = styled(MaxWidthWrapper)`
  position: relative;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-inline: 0;
  }
`;

export const Title = styled.h1`
  color: #23aa5d;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  margin-bottom: clamp(16px, 1.58vw, 24px);
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  margin-bottom: clamp(16px, 1.58vw, 24px);
`;
