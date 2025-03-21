import styled from 'styled-components';
import theme from '@styles/theme';

export const Title = styled.h1<{ color?: string; mb?: string }>`
  color: ${({ color }): string => color ?? '#23AA5D'};
  margin-bottom: ${({ mb }): number | string => mb ?? 0};
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  text-transform: initial;
`;
