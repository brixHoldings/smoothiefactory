import styled from 'styled-components';

import theme from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: clamp(59px, 6.28vw, 95px);
  align-items: center;
  margin-bottom: clamp(50px, 10.91vw, 165px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    gap: 40px;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #ed6c32;
  font-size: clamp(18px, 2.11vw, 32px);
  line-height: clamp(24px, 2.38vw, 36px);
  text-transform: initial;
  margin-bottom: clamp(16px, 1.58vw, 24px);
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #000;
  margin-bottom: clamp(16px, 1.58vw, 24px);
  max-width: 448px;
`;

export const ContentWrapper = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
