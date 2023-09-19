import NextLink from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OuterContainer = styled(motion.nav)`
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
`;

export const Container = styled.div`
  padding: 16px 20px;
  border-radius: 0px 0px 16px 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkSection = styled(Section)`
  gap: 55px;
  @media (max-width: 1140px) {
    flex: 1;
    justify-content: space-evenly;
    gap: 0;
  }
`;

export const Link = styled(motion.span)`
  text-decoration: none;
  position: relative;
  font-size: 18px;
  line-height: 21px;
  color: #474747;
  font-weight: 700;
  &[data-is-active='true'] {
    font-weight: 900;
  }
`;

export const ButtonLink = styled.button`
  text-decoration: none;
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: var(--nexa);
  font-size: 18px;
  line-height: 25px;
  color: #474747;
  font-weight: 700;
  &[data-is-active='true'] {
    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      background: #474747;
      width: 100%;
      height: 2px;
      border-radius: 2px;
    }
  }
`;

export const NativeLink = styled(motion.a)`
  text-decoration: none;
  position: relative;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: #474747;
`;

export const Separator = styled(motion.div)`
  width: 2px;
  height: 30px;
  background: #474747;
  border-radius: 1px;
  margin: 0 20px;
`;

export const Button = styled(motion.a)`
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  padding: 12px 20px 8px 20px;
  border-radius: 2px;
  background: #98c44a;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
`;

export const MobileWrapper = styled(motion.nav)`
  width: 100%;
  padding: 2px 32px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  align-items: center;
  background: #ffffff;
  top: 0;
`;

export const HomeLink = styled(NextLink)`
  padding: 5px;
  display: inline-flex;
  margin-left: -5px;
`;

export const HamburgerButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  background: transparent;
  padding: 13px 12px;
  cursor: pointer;
  margin-right: -12px;
`;

export const HamburgerMenu = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  z-index: 2000;
  width: 100%;
  padding: 40px 23px 60px 32px;
  box-shadow: 0px 6px 20px rgba(63, 26, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #fff;
  &[data-is-open='false'] {
    pointer-events: none;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 13px;
  right: 25px;
  padding: 6px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
