import styled from 'styled-components';

import theme from '@styles/theme';

export const MapWrapper = styled.div`
  height: 100%;
  flex: 1;
  order: 2;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    order: 1;
    height: 232px;
    flex: initial;
  }
`;
