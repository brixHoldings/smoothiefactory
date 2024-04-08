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

export const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
  max-width: 554px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline: 32px;
`;
