import styled from 'styled-components';

export const Wrapper = styled.section<{ footerHeight: number }>`
  padding: clamp(180px, 17.85vw, 270px) 0 clamp(120px, 12.43vw, 188px) 0;
  position: relative;
`;

export const Text = styled.p`
  color: #474747;
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 400;
  line-height: clamp(21px, 1.85vw, 28px);
  max-width: 603px;
  margin-bottom: clamp(24px, 2.64vw, 40px);
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
  margin-bottom: clamp(24px, 2.64vw, 40px);
`;

export const Disclaimer = styled.p`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  max-width: 719px;
`;
