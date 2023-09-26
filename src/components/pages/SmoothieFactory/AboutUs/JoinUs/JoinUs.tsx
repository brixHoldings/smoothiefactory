'use client';

import { Wrapper, Text, Button } from './JoinUs.style';

import type { FC } from 'react';

import { MaxWidthWrapper } from '@styles/common';
import { Title } from '../../Home/common';
import Link from 'next/link';

const JoinUs: FC = () => (
  <MaxWidthWrapper>
    <Wrapper>
      <Title color="#474747" style={{ textAlign: 'center' }}>
        Want to join us?
      </Title>
      <Text>
        Join our dynamic team at Smoothie Factory + Kitchen! We're constantly growing and on the lookout for passionate
        individuals who share our commitment to delivering delicious smoothies, juices, food and exceptional customer
        experiences.
      </Text>
      <Link href="/careers" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button>Join us</Button>
      </Link>
    </Wrapper>
  </MaxWidthWrapper>
);

export default JoinUs;
