'use client';

import { Container, FlexWrapper, Title, Text } from './ThankYou.style';

import type { FC } from 'react';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { ThankYouSlice } from 'prismicio-types';

const ThankYou: FC<{ slice: ThankYouSlice }> = ({
  slice: {
    primary: { title, text },
  },
}) => (
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
      height="467px"
      hideUnder={768}
      left="-27%"
      src="/images/IMG_3659 2.png"
      style={{ zIndex: -1 }}
      top="35%"
      width="696px"
      renderInBody
    />
    <FlexWrapper>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
    </FlexWrapper>
  </Container>
);

export default ThankYou;
