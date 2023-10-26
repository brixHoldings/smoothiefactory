// @ts-nocheck
import AthletesFavourites from '@components/pages/SmoothieFactory/Menu/AthletesFavourites/AthletesFavourites';
import Header from '@components/pages/SmoothieFactory/Menu/Header/Header';
import OurSpecialOffers from '@components/pages/SmoothieFactory/Menu/OurSpecialOffers/OurSpecialOffers';
import { createClient } from 'src/prismicio';

import type { FC } from 'react';

export const metadata = {
  title: 'Menu | Smoothie Factory + Kitchen',
};

/* @ts-expect-error Server Component */
const Menu: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('menu');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'text_block');

  return (
    <>
      <Header slice={headerSlice} />
      {/* <OurSpecialOffers /> */}
      <AthletesFavourites />
    </>
  );
};

export default Menu;
