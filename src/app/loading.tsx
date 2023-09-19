'use client';
import Lottie from 'lottie-react';

import { Container, LottieWrapper } from './loading.style';

import loaderSF from '../../public/lottie/loaderSF.json';

import type { FC } from 'react';

const Loading: FC = () => (
  <Container>
    <LottieWrapper>
      <Lottie animationData={loaderSF} />
    </LottieWrapper>
  </Container>
);

export default Loading;
