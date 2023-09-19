import styled from 'styled-components';

import theme from '@styles/theme';

export const ContentWrapper = styled.section<{ footerHeight: number; navigationHeight: number }>`
  display: flex;
  position: fixed;
  left: 0;
  top: ${({ navigationHeight }): string => `${navigationHeight}px`};
  height: ${({ footerHeight, navigationHeight }): string => `calc(100% - ${footerHeight + navigationHeight}px)`};
  width: 100%;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    position: initial;
    margin-top: ${({ navigationHeight }): string => `${navigationHeight}px`};
  }
`;
