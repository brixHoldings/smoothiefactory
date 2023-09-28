import NextLink from 'next/link';
import styled from 'styled-components';
import theme from '@styles/theme';

import FloatingImage from '../FloatingImage/FloatingImage';

export const Container = styled.div`
  padding: 32px 35px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: space-around;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    flex-direction: column;
    justify-content: initial;
    align-items: center;
    gap: 0;
    padding: 42px 32px 40px 32px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  order: 1;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-bottom: 24px;
  }
`;

export const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
`;

export const Link = styled(NextLink)`
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
`;

export const Separator = styled.div`
  width: 1px;
  height: 12px;
  background: #fff;
  border-radius: 1px;
  margin: 0 8px;
`;

export const CopyrightSection = styled.div`
  display: flex;
  order: 2;
  flex-direction: row;
  align-items: center;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    order: 3;
  }
`;

export const TermsAndConditions = styled.div`
  display: flex;
  order: 3;
  flex-direction: column;
  gap: 8px;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    order: 2;
    margin-bottom: 24px;
  }
`;

export const TermsAndConditionsInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Disclaimer = styled.div`
  gap: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    gap: 12px;
  }
`;

export const Copyright = styled.span`
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Trademark = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #fff;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  max-width: calc(1430px + 80px);
`;

export const OuterWrapper = styled.footer`
  width: 100%;
  position: relative;
  z-index: 1000;
  margin-top: auto;
  padding-top: 86px;
  padding-bottom: 42px;
  padding-inline: 40px;
  margin-inline: auto;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    padding-inline: 32px;
  }
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    padding-inline: 0;
    padding-top: 158px;
    padding-bottom: 0;
  }
`;

export const FloatingStampImage = styled(FloatingImage)`
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    left: initial;
    top: -68px;
    transform: initial;
    right: initial;
  }
`;

export const FloatingGrapeImage = styled(FloatingImage)`
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    left: 0;
    top: 0;
    transform: translate(3%, -165%);
  }
`;

export const FloatingLeafImage = styled(FloatingImage)`
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    transform: translate(-52%, -77%);
  }
`;
