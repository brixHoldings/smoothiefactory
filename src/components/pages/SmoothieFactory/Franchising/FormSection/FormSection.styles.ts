import styled from 'styled-components';

import theme from '@styles/theme';

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  border-radius: 29px;
  padding-inline: clamp(32px, 4.49vw, 68px);
  padding-block: clamp(32px, 3.96vw, 60px);
  box-shadow: 0px 5px 10px 0px rgba(66, 27, 0, 0.25);
`;

export const CtaText = styled.p`
  font-size: 18px;
  line-height: 32px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 32px;
    color: #4e3629;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.p`
  font-family: 'Lucida Grande';
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 8px;
  margin-top: 24px;

  :first-of-type {
    margin-top: 0;
  }
`;

export const InputField = styled.input`
  font-family: 'Lucida Grande';
  border-radius: 4px;
  padding: 10px 0 10px 25px;
  border: 1px solid #421b00;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  gap: 24px;
  flex-wrap: wrap;
`;

export const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;
