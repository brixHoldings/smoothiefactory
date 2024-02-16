import ChooseDesigns from '@components/pages/SmoothieFactory/GiftCards/ChooseDesigns/ChooseDesigns';
import Header from '@components/pages/SmoothieFactory/GiftCards/Header/Header';
import { createClient } from 'prismicio';

import type { FC } from 'react';
import { ChoseDesignsSlice, GiftCardsHeaderSlice } from 'prismicio-types';
import { Metadata } from 'next';
import { asText } from '@prismicio/client';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('gift_cards');

  return {
    title: page.data.meta_title,
    description: asText(page.data.meta_description),
  };
}

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
