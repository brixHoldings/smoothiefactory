import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

export const Title = styled.h1`
  color: #23aa5d;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  margin-bottom: clamp(66px, 13.82vw, 209px);
`;

export const GalleryContentWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  position: relative;
`;

export const GalleryItemTitle = styled.h2`
  color: #474747;
  font-size: clamp(21px, 1.85vw, 28px);
  line-height: clamp(28px, 2.64vw, 40px);
  margin-bottom: 24px;
`;

export const GalleryItemLabels = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    gap: 16px;
  }
`;

export const Label = styled.span`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #474747;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  white-space: nowrap;
  color: #474747;
`;

export const LabelText = styled.span`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

export const GalleryText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #474747;
  margin-bottom: 24px;
`;

export const GalleryContent = styled.div`
  max-width: 447px;
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    gap: 33px;
    &[data-reverse-layout='true'] {
      order: 1;
    }
  }
`;

export const GalleryButtons = styled.div`
  display: flex;
  gap: 24px;
`;

export const CtaButtonOutlined = styled(CtaButton)`
  background: transparent;
  border: 3px solid #23aa5d;
  color: #23aa5d;
`;

export const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: clamp(285px, 45.03vw, 681px);
  align-items: center;
  justify-content: flex-end;
  &[data-reverse-layout='true'] {
    justify-content: flex-start;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const FloatingRightImage = styled(FloatingImage)`
  top: initial;
  right: 0;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    right: -22%;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    position: initial;
    transform: translateX(-22%);
  }
`;

export const FloatingLeftImage = styled(FloatingImage)`
  top: initial;
  left: 0;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    left: -22%;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    position: initial;
    transform: translateX(22%);
  }
`;

export const OuterWrapper = styled.div`
  position: relative;
`;
