import styled from 'styled-components';

import theme from '@styles/theme';

export const ContentWrapper = styled.section<{ footerHeight: number; navigationHeight: number }>`
  display: flex;
  /* position: fixed;
  left: 0; */
  margin-top: ${({ navigationHeight }): string => `${navigationHeight}px`};
  height: ${({ footerHeight, navigationHeight }): string => `calc(100vh - ${footerHeight + navigationHeight}px)`};
  width: 100%;
  min-height: 400px;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    min-height: ${({ navigationHeight }): string => `calc(100vh - ${navigationHeight}px)`};
  }
`;
