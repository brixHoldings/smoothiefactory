import styled from 'styled-components';

import theme from '@styles/theme';

export const Container = styled.section`
  width: 100%;
  min-height: 70vh;
  margin-inline: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #474747;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(45px, 3.63vw, 55px);
  margin-bottom: 16px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 5px;
  }
`;

export const SubTitle = styled.h2`
  text-transform: uppercase;
  font-size: clamp(24px, 1.85vw, 28px);
  line-height: clamp(32px, 2.64vw, 40px);
  margin-bottom: 32px;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    margin-bottom: 70px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline: 32px;
`;

export const Button = styled.button`
  background: #23aa5d;
  padding: 12px 24px 8px 24px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 4px;
`;
