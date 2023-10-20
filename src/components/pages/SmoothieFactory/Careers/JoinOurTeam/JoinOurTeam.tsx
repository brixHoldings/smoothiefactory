'use client';

import { Wrapper, Text, Button, Disclaimer } from './JoinOurTeam.style';

import type { FC } from 'react';

import { useStore } from '@context/StoreProvider';
import { MaxWidthWrapper, Super } from '@styles/common';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { Title } from '../../Home/common';

const JoinOurTeam: FC = () => {
  const { footerHeight } = useStore();

  return (
    <Wrapper footerHeight={footerHeight}>
      <MaxWidthWrapper style={{ position: 'relative' }}>
        <FloatingImage
          alt="background"
          height="clamp(448px,44.51vw, 673px)"
          top="-10%"
          src="/images/Frame 169 1.png"
          style={{ zIndex: -1 }}
          right="24%"
          width="clamp(601px,59.65vw, 902px)"
          hideUnder={768}
        />
        <Title mb="8px" color="#474747" style={{ textAlign: 'left' }}>
          Join our team!
        </Title>
        <Text>
          Join our dynamic team at Smoothie Factory + Kitchen<Super>TM</Super>! We're constantly growing and on the
          lookout for passionate individuals who share our commitment to delivering delicious smoothies, juices, and
          food, while providing exceptional customer experiences. Apply and be part of a company that values innovation,
          teamwork, and a love for all things healthy. Your career journey starts here!
        </Text>
        <Button>APPLY NOW ONLINE</Button>
        <Disclaimer>
          Join our dynamic team at Smoothie Factory + Kitchen<Super>TM</Super>! We're constantly growing and on the
          lookout for passionate individuals who share our commitment to delivering delicious smoothies, juices, and
          food, while providing exceptional customer experiences. Apply and be part of a company that values innovation,
          teamwork, and a love for all things healthy. Your career journey starts here!
        </Disclaimer>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default JoinOurTeam;
