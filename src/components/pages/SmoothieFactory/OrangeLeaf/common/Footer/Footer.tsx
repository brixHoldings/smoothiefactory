'use client';

import { useRef, useEffect } from 'react';

import useDimension from '@hooks/useDimension';
import { useStore } from '@context/StoreProvider';

import {
  Container,
  Disclaimer,
  Link,
  SocialLink,
  Separator,
  SocialLinks,
  Wrapper,
  Copyright,
  CopyrightSection,
  Trademark,
  TermsAndConditions,
  OuterWrapper,
  FloatingStampImage,
  FloatingGrapeImage,
  FloatingLeafImage,
  TermsAndConditionsInnerWrapper,
} from './Footer.styles';

import Image from 'next/image';

import type { FC } from 'react';
import { Super } from '@styles/common';

const Footer: FC = () => {
  const ref = useRef<HTMLElement>(null);

  const { setFooterHeight } = useStore();

  const { height } = useDimension(ref);

  useEffect(() => {
    setFooterHeight(height);
  }, [height, setFooterHeight]);

  return (
    <OuterWrapper ref={ref}>
      <Image alt="wood bg" src="/images/footer-bg.png" fill />
      <Wrapper>
        <FloatingGrapeImage
          alt="grape"
          height="clamp(99px, 18.79vw, 133px)"
          left="-13%"
          src="/images/footer-grape.png"
          top="-90%"
          width="clamp(206px, 18.18vw, 275px)"
        />
        <FloatingLeafImage
          alt="leaf"
          height="clamp(60px, 17.07vw, 107px)"
          right="-102%"
          src="/images/footer-leaf.svg"
          top="-97%"
          width="clamp(58px, 6.81vw, 103px)"
        />
        <FloatingStampImage
          alt="letters"
          height="clamp(93px, 8.20vw, 124px)"
          right="33%"
          src="/images/letters.svg"
          top="-58%"
          width="clamp(94px, 8.26vw, 125px)"
        />
        <Container>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/smoothiefactorykitchen" target="_blank">
              <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" fill="white" r="16" />
                <path
                  d="M19.7188 17L20.1562 14.125H17.375V12.25C17.375 11.4375 17.75 10.6875 19 10.6875H20.2812V8.21875C20.2812 8.21875 19.125 8 18.0312 8C15.75 8 14.25 9.40625 14.25 11.9062V14.125H11.6875V17H14.25V24H17.375V17H19.7188Z"
                  fill="#474747"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/smoothiefactorykitchen" target="_blank">
              <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" fill="#fff" r="16" />
                <path
                  d="M16 12.4062c-2 0-3.5938 1.625-3.5938 3.5938 0 2 1.5938 3.5938 3.5938 3.5938 1.9688 0 3.5938-1.5938 3.5938-3.5938 0-1.9688-1.625-3.5938-3.5938-3.5938Zm0 5.9376c-1.2812 0-2.3438-1.0313-2.3438-2.3438 0-1.2812 1.0313-2.3125 2.3438-2.3125 1.2812 0 2.3125 1.0313 2.3125 2.3125 0 1.3125-1.0313 2.3438-2.3125 2.3438Zm4.5625-6.0626c0-.4687-.375-.8437-.8437-.8437-.4688 0-.8438.375-.8438.8437 0 .4688.375.8438.8438.8438.4687 0 .8437-.375.8437-.8438Zm2.375.8438C22.875 12 22.625 11 21.8125 10.1875S20 9.125 18.875 9.0625C17.7188 9 14.25 9 13.0938 9.0625c-1.125.0625-2.0938.3125-2.9376 1.125C9.34375 11 9.09375 12 9.03125 13.125c-.0625 1.1562-.0625 4.625 0 5.7812.0625 1.125.3125 2.0938 1.12495 2.9376.8438.8124 1.8126 1.0624 2.9376 1.125 1.1562.0624 4.625.0624 5.7812 0 1.125-.0626 2.125-.3126 2.9375-1.125.8125-.8438 1.0625-1.8126 1.125-2.9376.0625-1.1562.0625-4.625 0-5.7812Zm-1.5 7c-.2187.625-.7187 1.0938-1.3125 1.3438-.9375.375-3.125.2812-4.125.2812-1.0312 0-3.2188.0938-4.125-.2812-.625-.25-1.0938-.7188-1.3438-1.3438-.375-.9062-.2812-3.0938-.2812-4.125 0-1-.0938-3.1875.2812-4.125.25-.5938.7188-1.0625 1.3438-1.3125.9062-.375 3.0938-.2813 4.125-.2813 1 0 3.1875-.0937 4.125.2813.5938.2187 1.0625.7187 1.3125 1.3125.375.9375.2813 3.125.2813 4.125 0 1.0312.0937 3.2188-.2813 4.125Z"
                  fill="#474747"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/smoothiefactory?lang=en" target="_blank">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M20.1629 9.5H22.3691L17.5504 15.0062L23.2191 22.5H18.7816L15.3035 17.9563L11.3285 22.5H9.11914L14.2723 16.6094L8.83789 9.5H13.3879L16.5285 13.6531L20.1629 9.5ZM19.3879 21.1812H20.6098L12.7223 10.75H11.4098L19.3879 21.1812Z"
                  fill="#474747"
                />
              </svg>
            </SocialLink>
          </SocialLinks>
          <CopyrightSection>
            <Disclaimer>
              <Copyright>{new Date().getFullYear()} Smoothie Holdings, LLC All rights reserved.</Copyright>
              <Trademark>
                SMOOTHIE FACTORY<Super>®</Super> name, design and related marks are trademarks of Smoothie Factory
                <Super>®</Super>, LLC
              </Trademark>
            </Disclaimer>
          </CopyrightSection>
          <TermsAndConditions>
            <TermsAndConditionsInnerWrapper>
              <Link href="/about-us#form-bg">Contact</Link>
              {/* <Separator />
              <Link href="/careers">Join our team</Link> */}
            </TermsAndConditionsInnerWrapper>
            <TermsAndConditionsInnerWrapper>
              <Link href="/privacy">Privacy</Link>
              <Separator />
              <Link href="/terms-of-use">Terms & Conditions</Link>
            </TermsAndConditionsInnerWrapper>
          </TermsAndConditions>
        </Container>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Footer;
