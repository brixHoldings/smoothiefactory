import ChooseDesigns from '@components/pages/SmoothieFactory/GiftCards/ChooseDesigns/ChooseDesigns';
import Header from '@components/pages/SmoothieFactory/GiftCards/Header/Header';

import type { FC } from 'react';

export const metadata = {
  title: 'Gift Cards | Smoothie Factory + Kitchen',
};

const GiftCards: FC = () => (
  <>
    <Header />
    <ChooseDesigns />
  </>
);

export default GiftCards;
