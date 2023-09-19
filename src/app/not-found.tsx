'use client';

import { Container, FlexWrapper, Title, SubTitle, Button } from './not-found.style';

import type { FC } from 'react';
import Link from 'next/link';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

const NotFound: FC = () => (
  <Container>
    <FloatingImage
      alt="background"
      height="646px"
      right="-47%"
      src="/images/404shape.svg"
      style={{ zIndex: -1 }}
      top="15%"
      width="606px"
      renderInBody
    />
    <FloatingImage
      alt="background"
      height="534px"
      hideUnder={768}
      left="-27%"
      src="/images/IMG_2160 (1) 1.png"
      style={{ zIndex: -1 }}
      top="35%"
      width="532px"
      renderInBody
    />
    <FlexWrapper>
      <Title>Error 404</Title>
      <SubTitle>Page not found!</SubTitle>
      <Link href="/">
        <Button>Go back home</Button>
      </Link>
    </FlexWrapper>
  </Container>
);

export default NotFound;
