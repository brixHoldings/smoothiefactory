import styled from 'styled-components';

import theme from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-bottom: 63px;
`;

export const Text = styled.p`
  color: #474747;
  text-align: center;
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 400;
  line-height: clamp(21px, 1.85vw, 28px);
  max-width: 603px;
`;

export const Button = styled.button`
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 900;
  line-height: clamp(21px, 1.85vw, 19px);
  padding: clamp(8px, 1.25vw, 19px) clamp(12px, 3.1vw, 47px) clamp(4px, 0.99vw, 15px) clamp(12px, 3.1vw, 47px);
  border: none;
  background-color: #23aa5d;
  border-radius: 4px;
  max-width: 357px;
  width: 100%;
  cursor: pointer;
`;
