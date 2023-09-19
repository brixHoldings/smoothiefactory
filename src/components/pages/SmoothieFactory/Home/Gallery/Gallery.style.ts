import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { motion } from 'framer-motion';

export const InnerWrapper = styled.div`
  width: 83.3%;
  margin-left: auto;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 100%;
    margin-left: initial;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RelativeWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ArrowsWrapper = styled.div`
  display: inline-flex;
  margin-left: 45%;
  gap: 15px;
  position: relative;
  z-index: 1;
  margin-bottom: clamp(10px, 2.31vw, 35px);
  justify-content: flex-end;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-left: auto;
  }
`;

export const Arrow = styled.button`
  width: clamp(38px, 2.77vw, 42px);
  height: clamp(38px, 2.77vw, 42px);
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
`;

export const GalleryContent = styled(motion.div)`
  max-width: 467px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    gap: 33px;
  }
`;

export const GalleryContentWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

export const GalleryItemTitle = styled.h2`
  color: #fff;
  font-size: clamp(21px, 1.85vw, 28px);
  line-height: clamp(28px, 2.64vw, 40px);
  margin-bottom: 24px;
  text-transform: uppercase;
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
  border: 1px solid #fff;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  white-space: nowrap;
  color: #fff;
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
  color: #fff;
  margin-bottom: 24px;
`;

export const FloatingItemImage = styled(FloatingImage)`
  transform: translateX(100%);
  top: initial;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: initial;
    position: static;
`;
