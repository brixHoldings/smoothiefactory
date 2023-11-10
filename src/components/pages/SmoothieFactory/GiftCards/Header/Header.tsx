'use client';

import Image from 'next/image';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { Wrapper, Glass, RelativeMaxWidthWrapper, Title, Text } from './Header.style';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { GiftCardsHeaderSlice } from 'prismicio-types';

const Header: FC<{ slice: GiftCardsHeaderSlice }> = ({
  slice: {
    primary: { title, text, button },
  },
}) => {
  return (
    <Wrapper>
      <Image
        alt="bg"
        priority
        src="/images/GiftBack.png"
        style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
        fill
      />
      <RelativeMaxWidthWrapper>
        <Glass>
          <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
          <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
          <a href="https://smoothiefactory.myguestaccount.com/guest/egift?page=cardInfo" target="_blank">
            <CtaButton dangerouslySetInnerHTML={{ __html: button as string }}></CtaButton>
          </a>
        </Glass>
      </RelativeMaxWidthWrapper>
      <FloatingImage
        alt="spinach"
        priority
        bottom="100%"
        height="clamp(462px,437.89vw, 573px)"
        hideUnder={768}
        right="31%"
        src="/images/cancer5443_spinach_on_a_white_background_top-down__isolated_pho_eefb010c-ce25-4d68-8492-9dd70353bb3a 1.png"
        width="clamp(462px,37.89vw, 573px)"
      />
    </Wrapper>
  );
};

export default Header;
