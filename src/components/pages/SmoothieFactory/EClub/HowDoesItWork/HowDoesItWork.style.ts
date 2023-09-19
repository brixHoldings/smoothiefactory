import styled from 'styled-components';

import theme from '@styles/theme';

import { Title } from '../common';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: clamp(196px, 20.7vw, 313px);
`;

export const HowDoesItWorkTitle = styled(Title)`
  text-align: center;
  margin-bottom: 69px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 101px;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 50px;
  }
`;

export const Step = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    gap: 24px;
  }
`;

export const StepTitle = styled.h1<{ color: string }>`
  font-size: clamp(32px, 3.96vw, 60px);
  line-height: clamp(40px, 3.63vw, 55px);
  letter-spacing: clamp(2.56px, 0.31vw, 4.8px);
  -webkit-text-stroke: 1px #23aa5d;
  margin-bottom: 8px;
  color: transparent;
  -webkit-text-stroke: ${({ color }): string => `1px  ${color}`};
`;

export const StepSubtitle = styled.h2<{ color: string }>`
  font-size: clamp(18px, 2.11vw, 32px);
  line-height: clamp(24px, 2.38vw, 36px);
  color: ${({ color }): string => color};
  text-transform: initial;
`;

export const Steps = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    gap: 32px;
  }
`;

export const StepContent = styled.div<{ alignStart?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignStart = false }): string => (alignStart ? 'flex-start' : 'flex-end')};
`;
