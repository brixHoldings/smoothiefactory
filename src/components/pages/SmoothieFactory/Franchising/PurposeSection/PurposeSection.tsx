'use client';

import { Container, ContentContainer, Text, StyledLogo } from './PurposeSection.styles';

import type { FC } from 'react';
import { FranchisingPurposeSectionSliceDefault } from 'prismicio-types';

const PurposeSection: FC<{
  slice: FranchisingPurposeSectionSliceDefault;
}> = ({
  slice: {
    primary: { text },
  },
}) => (
  <Container>
    <ContentContainer>
      <StyledLogo alt="logo image" src="/images/sf-logo.png" />
      <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
    </ContentContainer>
  </Container>
);

export default PurposeSection;
