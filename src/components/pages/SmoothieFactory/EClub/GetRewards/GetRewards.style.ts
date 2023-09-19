import styled from 'styled-components';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import theme from '@styles/theme';

export const FloatingBgImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    transform: translate(10%, -17%);
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: translate(21%, -8%);
  }
`;

export const Glass = styled.div`
  margin-top: clamp(129px, 17.32vw, 262px);
  margin-bottom: clamp(212px, 35.78vw, 541px);
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  padding: clamp(88px, 8.73vw, 132px) clamp(156px, 26.98vw, 408px) clamp(88px, 8.73vw, 132px)
    clamp(137px, 11.83vw, 179px);
  width: fit-content;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    padding: 70px 32px;
  }
`;

export const GlassTitle = styled.h1`
  font-size: clamp(32px, 3.96vw, 60px);
  line-height: clamp(40px, 3.63vw, 55px);
  letter-spacing: clamp(2.56px, 0.31vw, 4.8px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #23aa5d;
  margin-bottom: clamp(16px, 1.58vw, 24px);
`;

export const GlassText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #000;
  margin-bottom: clamp(16px, 1.58vw, 24px);
  max-width: 552px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const LottieWrapper = styled.div`
  max-height: 60px;
  transform: rotate(-5deg);
  position: absolute;
  bottom: 23%;
  left: 0;
  right: 0;
  width: 101%;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    bottom: 17%;
  }
`;
