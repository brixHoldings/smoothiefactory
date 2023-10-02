import styled from 'styled-components';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import theme from '@styles/theme';

export const RelativeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: clamp(231px, 21.69vw, 328px);
  margin-bottom: 58px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 103px;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-top: 32px;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 306px;
  }
`;

export const FloatingCherryImage = styled(FloatingImage)`
  margin-bottom: 16px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 47px;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 21px;
  }
`;

export const BlendTogetherTitle = styled.h1`
  color: #98c44a;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  text-transform: initial;
  margin-bottom: 54px;
  text-align: center;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 88px;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 65px;
  }
`;

export const JoinOurClubTitle = styled.h1`
  color: #ed6c32;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  text-transform: initial;
  margin-bottom: 16px;
  text-align: right;
`;

export const JoinOurClubSection = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  position: relative;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    gap: 32px;
  }
`;

export const JoinOurWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-block: 24px;
`;

export const GetAGiftCardWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const JoinOurClubText = styled.p`
  color: #474747;
  font-size: clamp(18px, 1.58vw, 24px);
  line-height: clamp(28px, 2.11vw, 32px);
  text-transform: initial;
  margin-bottom: 16px;
  text-align: right;
`;

export const GetAGiftCardText = styled(JoinOurClubText)`
  text-align: left;
`;

export const GetAGiftCardTitle = styled(JoinOurClubTitle)`
  text-align: left;
  color: #23aa5d;
`;

export const FloatingEClubImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-left: -94px;
    transform: translateX(94px);
  }
`;

export const FloatingGetAGiftCardImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-right: -94px;
    transform: translateX(-94px);
  }
`;

export const FloatingGreenBubbleImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: translate(90%, 45%);
  }
`;

export const Polygon = styled.div`
  background: #fff;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
  height: clamp(228px, 19.24vw, 291px);
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const LottieWrapper = styled.div`
  max-height: 60px;
  min-width: 856px;
  transform: rotate(-2.63deg);
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  width: 101%;
`;
