import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import styled from 'styled-components';

export const HeaderArea = styled.section`
  width: 100%;
  height: clamp(652px, 55.95vw, 846px);
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: clamp(76px, 6.61vw, 100px);
`;

export const CtaArea = styled.div`
  position: relative;
  z-index: 1;
  margin-top: clamp(80px, 9.85vw, 149px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 32px;
`;

export const HeaderTitle = styled.h1`
  font-size: clamp(32px, 3.96vw, 60px);
  line-height: clamp(41px, 4.62vw, 70px);
  text-align: center;
  color: #fff;
  margin-bottom: clamp(8px, 1.05vw, 16px);
  max-width: 1095px;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FloatingGlassImage = styled(FloatingImage)`
  position: absolute;
  bottom: -13%;
`;
