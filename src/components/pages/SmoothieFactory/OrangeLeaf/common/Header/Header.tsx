'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { useAnimate } from 'framer-motion';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  Container,
  Link,
  Section,
  Separator,
  OuterContainer,
  LinkSection,
  Button,
  MobileWrapper,
  HamburgerButton,
  HamburgerMenu,
  CloseButton,
  NativeLink,
  HomeLink,
  ButtonLink,
  NativeLinkMobile,
  StyledMaxWidthWrapper,
} from './Header.styles';

import type { FC } from 'react';

import FloatingImage from '../FloatingImage/FloatingImage';
import useDimension from '@hooks/useDimension';
import useIsScrolled from '@hooks/useIsScrolled';
import { useStore } from '@context/StoreProvider';

const linkVariants = {
  transparent: { color: '#fff' },
  visible: { color: '#474747' },
};

const separatorVariants = {
  transparent: { background: '#fff' },
  visible: { background: '#474747' },
};

const variants = {
  transparent: { background: 'rgba(255,255,255, 0)' },
  visible: { background: 'rgba(255,255,255, 1)' },
};

const buttonVariants = {
  transparent: { background: 'rgba(255,255,255, 0.3)', boxShadow: ' 0px 0px 10px 0px rgba(113, 49, 14, 0.30)' },
  visible: { background: '#98c44a', boxShadow: 'none' },
};

const Header: FC = () => {
  const { width } = useWindowSize();
  const [ref, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isScrolled = useIsScrolled();
  const mobileNavigationRef = useRef<HTMLElement>(null);
  const desktopNavigationRef = useRef<HTMLElement>(null);

  const { setNavigationHeight } = useStore();

  const isTransparent = pathname === '/' && !isScrolled;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }
  }, [isOpen]);

  const isMobile = width <= theme.breakpoints.smallScreen;

  const { height } = useDimension(isMobile ? mobileNavigationRef : desktopNavigationRef);

  useEffect(() => {
    setNavigationHeight(height);
  }, [height, setNavigationHeight]);

  const onHamburgerClick = (): void => {
    void animate(ref.current, { opacity: 1, x: 0 }, { duration: 0.3 });
    setIsOpen(true);
  };

  const onClose = (href: string): void => {
    void animate(ref.current, { opacity: 0, x: 20 });
    router.push(href);
    setIsOpen(false);
  };

  return isMobile ? (
    <>
      <HamburgerMenu ref={ref} data-is-open={isOpen} initial={{ opacity: 0, x: 20 }}>
        <CloseButton
          onClick={(): void => {
            void animate(ref.current, { opacity: 0, x: 20 });
            setIsOpen(false);
          }}
        >
          <svg fill="none" height="32" viewBox="0 0 22 22" width="20">
            <path
              d="M20.375 4.4375c.8125-.75.8125-2.0625 0-2.8125-.75-.8125-2.0625-.8125-2.8125 0L11 8.1875 4.375 1.625c-.75-.8125-2.0625-.8125-2.8125 0-.8125.75-.8125 2.0625 0 2.8125L8.125 11l-6.5625 6.625c-.8125.75-.8125 2.0625 0 2.8125.75.8125 2.0625.8125 2.8125 0L11 13.875l6.5625 6.5625c.75.8125 2.0625.8125 2.8125 0 .8125-.75.8125-2.0625 0-2.8125L13.8125 11l6.5625-6.5625Z"
              fill="#421B00"
            />
          </svg>
        </CloseButton>
        <ButtonLink
          onClick={(): void => {
            onClose('/');
          }}
        >
          <FloatingImage priority alt="smoothie factory logo" height="58px" src="/images/logo.svg" width="120px" />
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/menu'}
          onClick={(): void => {
            onClose('/menu');
          }}
        >
          Menu
        </ButtonLink>
        <NativeLinkMobile
          href="https://locations.smoothiefactorykitchen.com/"
          data-is-active={
            typeof window !== 'undefined' &&
            window.location.origin.includes('https://locations.smoothiefactorykitchen.com/')
          }
        >
          Locations
        </NativeLinkMobile>
        <ButtonLink
          data-is-active={pathname === '/e-club-signup'}
          onClick={(): void => {
            onClose('/e-club-signup');
          }}
        >
          Factory Fan E-Club
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/gift-cards'}
          onClick={(): void => {
            onClose('/gift-cards');
          }}
        >
          Gift cards
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/about-us'}
          onClick={(): void => {
            onClose('/about-us');
          }}
        >
          About us
        </ButtonLink>
        <Button href="https://order.smoothiefactorykitchen.com/" style={{ marginTop: '4px' }} target="_blank">
          Order now
        </Button>
      </HamburgerMenu>
      <MobileWrapper ref={mobileNavigationRef} animate={isTransparent ? 'transparent' : 'visible'} variants={variants}>
        <HomeLink href="/">
          {isTransparent ? (
            <FloatingImage
              priority
              alt="smoothie factory logo"
              height="38px"
              src="/images/logo-white.svg"
              width="77px"
            />
          ) : (
            <FloatingImage priority alt="smoothie factory logo" height="38px" src="/images/logo.svg" width="77px" />
          )}
        </HomeLink>
        <HamburgerButton onClick={onHamburgerClick}>
          <svg fill="none" height="18" viewBox="0 0 21 18">
            <path
              d="M0 1.5C0 .703125.65625 0 1.5 0h18c.7969 0 1.5.703125 1.5 1.5 0 .84375-.7031 1.5-1.5 1.5h-18C.65625 3 0 2.34375 0 1.5ZM0 9c0-.79688.65625-1.5 1.5-1.5h18c.7969 0 1.5.70312 1.5 1.5 0 .84375-.7031 1.5-1.5 1.5h-18C.65625 10.5 0 9.84375 0 9Zm19.5 9h-18C.65625 18 0 17.3438 0 16.5c0-.7969.65625-1.5 1.5-1.5h18c.7969 0 1.5.7031 1.5 1.5 0 .8438-.7031 1.5-1.5 1.5Z"
              fill={isTransparent ? '#fff' : '#474747'}
            />
          </svg>
        </HamburgerButton>
      </MobileWrapper>
    </>
  ) : (
    <OuterContainer ref={desktopNavigationRef} animate={isTransparent ? 'transparent' : 'visible'} variants={variants}>
      <StyledMaxWidthWrapper>
        <Container>
          <Section>
            <NextLink href="/">
              {isTransparent ? (
                <FloatingImage
                  alt="smoothie factory logo"
                  height="clamp(58px,4.82vw, 73px)"
                  src="/images/logo-white.svg"
                  width="clamp(120px,9.92vw, 150px)"
                />
              ) : (
                <FloatingImage
                  alt="smoothie factory logo"
                  height="clamp(58px,4.82vw, 73px)"
                  src="/images/logo.svg"
                  width="clamp(120px,9.92vw, 150px)"
                />
              )}
            </NextLink>
            <Separator animate={isTransparent ? 'transparent' : 'visible'} variants={separatorVariants} />
            <NativeLink
              animate={isTransparent ? 'transparent' : 'visible'}
              href="https://locations.smoothiefactorykitchen.com/"
              variants={linkVariants}
              data-is-active={
                typeof window !== 'undefined' &&
                window.location.origin.includes('https://locations.smoothiefactorykitchen.com/')
              }
            >
              Locations
            </NativeLink>
          </Section>
          <LinkSection>
            <NextLink href="/menu">
              <Link
                animate={isTransparent ? 'transparent' : 'visible'}
                data-is-active={pathname === '/menu'}
                variants={linkVariants}
              >
                Menu
              </Link>
            </NextLink>
            <NextLink href="/e-club-signup">
              <Link
                animate={isTransparent ? 'transparent' : 'visible'}
                data-is-active={pathname === '/e-club-signup'}
                variants={linkVariants}
              >
                Factory Fan E-Club
              </Link>
            </NextLink>
            <NextLink href="/gift-cards">
              <Link
                animate={isTransparent ? 'transparent' : 'visible'}
                data-is-active={pathname === '/gift-cards'}
                variants={linkVariants}
              >
                Gift cards
              </Link>
            </NextLink>
            <NextLink href="/about-us">
              <Link
                animate={isTransparent ? 'transparent' : 'visible'}
                data-is-active={pathname === '/about-us'}
                variants={linkVariants}
              >
                About us
              </Link>
            </NextLink>
          </LinkSection>
          <Section>
            <NextLink href="/franchising">
              <Link
                animate={isTransparent ? 'transparent' : 'visible'}
                data-is-active={pathname === '/franchising'}
                variants={linkVariants}
              >
                Franchising
              </Link>
            </NextLink>
            <Separator animate={isTransparent ? 'transparent' : 'visible'} variants={separatorVariants} />
            <Button
              animate={isTransparent ? 'transparent' : 'visible'}
              href="https://order.smoothiefactorykitchen.com/"
              target="_blank"
              variants={buttonVariants}
            >
              Order now
            </Button>
          </Section>
        </Container>
      </StyledMaxWidthWrapper>
    </OuterContainer>
  );
};

export default Header;
