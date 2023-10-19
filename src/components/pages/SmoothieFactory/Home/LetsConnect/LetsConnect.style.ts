import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import theme from '@styles/theme';

const translateinfinite = keyframes`
	100% { transform:translateX(-600px)  }
`;

export const BgWrapper = styled.section`
  padding-top: clamp(102px, 16.33vw, 247px);
  width: 100%;
  position: relative;
  min-height: clamp(777px, 72.22vw, 1092px);
  margin-top: -70px;
  display: flex;
  align-items: stretch;
  margin-bottom: 37px;
`;

export const Glass = styled.div`
  padding-top: clamp(50px, 12.96vw, 196px);
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  z-index: 1;
  display: flex;
  flex: 1;
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const ColumnsWrapper = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.333333%;
  gap: 24px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 24px;
  & > * {
    scroll-snap-align: start;
  }
`;

export const CarouselWrapper = styled.div`
  overflow-x: hidden;
`;

export const Carousel = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.333333%;
  gap: 24px;
  animation: ${translateinfinite} 10s linear infinite;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    grid-auto-columns: 50%;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    grid-auto-columns: 100%;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: auto;
    grid-auto-flow: row;
  }
`;

export const Card = styled.div`
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Hashtag = styled.p`
  color: #474747;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: clamp(295.94px, 20.56vw, 311px);
`;

export const CardTitle = styled.span`
  color: #474747;
  font-size: 18px;
  line-height: 24px;
  font-weight: 900;
  margin-bottom: 8px;
`;

export const CardText = styled.span`
  color: #474747;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
`;

export const FollowUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FollowUsTitle = styled.h2`
  color: #23aa5d;
  font-size: 28px;
  line-height: 40px;
  text-transform: uppercase;
  margin-bottom: 26px;
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
