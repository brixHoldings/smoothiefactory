import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 4px;
`;

export const Pill = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  background: ${({ color }): string => color};
  color: #fff;
  padding: 6px 16px 4px 16px;
  border-radius: 16px;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
`;
