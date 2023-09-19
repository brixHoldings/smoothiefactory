import theme from '@styles/theme';

import styled from 'styled-components';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';

export const Title = styled.h1`
  color: #ed6c32;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  text-align: center;
  margin-bottom: clamp(46px, 3.37vw, 51px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 105px;
  }
`;

export const GreenBg = styled.div`
  background: #e1f0c3;
  margin-bottom: clamp(43px, 9.78vw, 148px);
  position: relative;
  border-top: 4px solid #98c44a;
  border-bottom: 4px solid #98c44a;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-top: 35px;
    border: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: clamp(65px, 4.76vw, 72px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    gap: 32px;
    flex-direction: column;
  }
`;

export const FloatingSmoothiesImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    .image-wrapper {
      width: 100%;
      height: 269px;
    }
  }
`;

export const FloatingBgShapeImage = styled(FloatingImage)`
  z-index: -1;
  transform: translate(104%, 0);
  right: 0;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: translate(81%, -1%);
    top: 0;
    right: 0;
  }
`;

export const SpecialOfferMaxWidthWrapper = styled(MaxWidthWrapper)`
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0;
  }
`;

export const OurNewFlavors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  justify-content: center;
  padding-block: clamp(137px, 9.72vw, 147px);
  z-index: 1;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-inline: 32px;
    padding-top: 0;
    padding-bottom: 58px;
    overflow: hidden;
  }
`;

export const OurNewFlavorsTitle = styled.h2`
  color: #23aa5d;
  font-size: clamp(21px, 1.85vw, 28px);
  line-height: clamp(28px, 2.64vw, 40px);
  margin-bottom: clamp(14px, 1.05vw, 16px);
`;

export const OurNewFlavorsText = styled.p`
  color: #4e3629;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  margin-bottom: clamp(24px, 2.38vw, 36px);
`;
