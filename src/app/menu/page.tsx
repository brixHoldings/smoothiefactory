import AthletesFavourites from '@components/pages/SmoothieFactory/Menu/AthletesFavourites/AthletesFavourites';
import Header from '@components/pages/SmoothieFactory/Menu/Header/Header';
import OurSpecialOffers from '@components/pages/SmoothieFactory/Menu/OurSpecialOffers/OurSpecialOffers';
import { createClient } from 'prismicio';

import type { FC } from 'react';
import { MenuLeftAlignedItemSlice, TextBlockSlice } from 'prismicio-types';

export const metadata = {
  title: 'Menu | Smoothie Factory + Kitchen',
};

/* @ts-expect-error Server Component */
const Menu: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('menu');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'text_block') as TextBlockSlice | undefined;
  const athletesFavouritesSlices = page.data.slices.filter((slice) => slice.slice_type === 'menu_left_aligned_item') as
    | MenuLeftAlignedItemSlice[]
    | undefined;

  return (
    <>
      {headerSlice ? <Header slice={headerSlice} /> : null}
      {/* <OurSpecialOffers /> */}
      <AthletesFavourites mainTitle={page.data.maintitle} slices={athletesFavouritesSlices} />
    </>
  );
};

export default Menu;
