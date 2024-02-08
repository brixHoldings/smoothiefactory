import styled, { css } from 'styled-components';

import theme from '@styles/theme';

import type { CSSProp } from 'styled-components';

type SliderButtonProps = {
  isActive: boolean;
};

type SliderAbsoluteContentWrapperProps = {
  isActive: boolean;
};

export const Container = styled.div`
  position: relative;
  padding-top: 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    padding-top: 28px;
  }
`;

export const CopyrightContainer = styled.div`
  padding-left: 172px;
  display: flex;
  margin-bottom: 62px;
  z-index: 1;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const CopyrightTitle = styled.h2`
  font-size: 52px;
  line-height: 72px;
  text-transform: uppercase;
  color: #23aa5d;
`;

export const SliderContainer = styled.div`
  width: 100%;
  z-index: 1;
`;

export const SliderButton = styled.button<SliderButtonProps>`
  height: 20px;
  margin-right: 28px;
  border-radius: 10px;
  border: 0;
  transition: width 0.5s;

  &:not(:last-child) {
    margin-right: 28px;
  }

  ${({ isActive }): CSSProp => {
    if (isActive) {
      return css`
        width: 80px;
        background-color: #f69f24;
      `;
    }

    return css`
      width: 20px;
      background-color: #e3e3e3;
      cursor: pointer;
    `;
  }}
`;

export const SliderButtonsContainer = styled.div`
  display: flex;
  padding-left: 172px;
  margin-bottom: 92px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 0 25px;
  }
`;

export const CircularImage = styled.img`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 80%;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  margin-bottom: clamp(34px, 4.1vw, 62px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
  }
`;

export const SliderImage = styled.div`
  flex: 1;
  position: relative;
  min-height: clamp(390px, 43.25vw, 654px);
`;

export const SliderTitle = styled.h2`
  font-size: clamp(25px, 3.17vw, 48px);
  line-height: clamp(30px, 3.63vw 55px);
  letter-spacing: clamp(2px, 0.25vw, 3.84px);
  color: transparent;
  -webkit-text-stroke: 2px #23aa5d;
  margin-bottom: 24px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 30px;
  }
`;

export const SliderText = styled.p`
  color: #474747;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw 28px);
`;

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 37.1%;
  background: #fff;
  padding: clamp(30px, 3.83vw, 58px) clamp(25px, 3.83vw, 58px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 100%;
  }
`;
