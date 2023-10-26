import AthletesFavourites from '@components/pages/SmoothieFactory/Menu/AthletesFavourites/AthletesFavourites';
import Header from '@components/pages/SmoothieFactory/Menu/Header/Header';
import OurSpecialOffers from '@components/pages/SmoothieFactory/Menu/OurSpecialOffers/OurSpecialOffers';

import type { FC } from 'react';

export const metadata = {
  title: 'Menu | Smoothie Factory + Kitchen',
};

const Menu: FC = () => (
  <>
    <Header />
    {/* <OurSpecialOffers /> */}
    <AthletesFavourites />
  </>
);

export default Menu;
