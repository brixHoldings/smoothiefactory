import ChooseDesigns from '@components/pages/SmoothieFactory/GiftCards/ChooseDesigns/ChooseDesigns';
import Header from '@components/pages/SmoothieFactory/GiftCards/Header/Header';
import { createClient } from 'src/prismicio';

import type { FC } from 'react';
import { ChoseDesignsSlice, GiftCardsHeaderSlice } from 'prismicio-types';

export const metadata = {
  title: 'Gift Cards | Smoothie Factory + Kitchen',
};

/* @ts-expect-error Server Component */
const GiftCards: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('gift_cards');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'gift_cards_header') as
    | GiftCardsHeaderSlice
    | undefined;
  const chooseDesignsSlice = page.data.slices.find((slice) => slice.slice_type === 'chose_designs') as
    | ChoseDesignsSlice
    | undefined;

  return (
    <>
      {headerSlice ? <Header slice={headerSlice} /> : null}
      {chooseDesignsSlice ? <ChooseDesigns slice={chooseDesignsSlice} /> : null}
    </>
  );
};

export default GiftCards;
