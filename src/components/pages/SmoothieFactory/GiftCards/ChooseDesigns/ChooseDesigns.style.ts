import styled, { keyframes } from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

const translateinfinite = keyframes`
	100% { transform:translateX(-3000px)  }
`;

export const Title = styled.h1`
  color: #ed6c32;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  max-width: 796px;
  margin-bottom: clamp(24px, 2.11vw, 32px);
`;

export const Wrapper = styled.div`
  margin-left: clamp(32px, 7.93vw, 120px);
  margin-bottom: clamp(24px, 5.95vw, 90px);
`;

export const Cards = styled.div`
  width: 100%;
  gap: clamp(24px, 2.11vw, 32px);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.333333%;
  animation: ${translateinfinite} 50s linear infinite;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    grid-auto-columns: 50%;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    grid-auto-columns: 100%;
  }
  margin-bottom: clamp(76px, 15.6vw, 236px);
`;

export const Card = styled.div`
  height: clamp(200px, 24.2vw, 366px);

  position: relative;
  border-radius: clamp(6px, 1.45vw, 22px);
  overflow: hidden;
`;

export const GiftCardArea = styled.div`
  width: 100%;
  min-height: clamp(609px, 46.95vw, 710px);
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: clamp(124px, 10.38vw, 157px);
  padding-bottom: clamp(124px, 7.07vw, 107px);
`;

export const GiftCard = styled.div`
  width: clamp(594px, 51.58vw, 780px);
  height: clamp(362px, 29.49vw, 446px);
  background: #fff;
  position: relative;
  z-index: 1;
  border-radius: 16px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-left: 32px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const BlackBar = styled.div`
  height: 52px;
  width: 100%;
  background: #421b00;
  margin-bottom: clamp(30px, 4.16vw, 63px);
`;

export const GiftCardTitle = styled.h1`
  color: #23aa5d;
  font-size: clamp(18px, 2.11vw, 32px);
  line-height: clamp(24px, 2.38vw, 36px);
  margin-bottom: 16px;
`;

export const GiftCardText = styled.p`
  color: #4e3629;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  margin-bottom: 16px;
`;

export const GiftCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-inline: clamp(30px, 5.42vw, 82px);
`;

export const FloatingCardImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    transform: translate(-25%, 37%);
  }
`;

export const LottieWrapper = styled.div`
  max-height: 60px;
  min-width: 856px;
  transform: rotate(-6.18deg);
  position: absolute;
  top: -6%;
  left: -20px;
  right: 0;
  width: 103%;
  z-index: 1;
`;
