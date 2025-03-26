import Form from '@components/pages/SmoothieFactory/EClub/Form/Form';
import GetBirthdayGift from '@components/pages/SmoothieFactory/EClub/GetBirthdayGift/GetBirthdayGift';
import GetRewards from '@components/pages/SmoothieFactory/EClub/GetRewards/GetRewards';
import HowDoesItWork from '@components/pages/SmoothieFactory/EClub/HowDoesItWork/HowDoesItWork';
import { BirthdayGiftSlice, EClubHeaderSlice, FormSlice } from 'prismicio-types';

import type { FC } from 'react';
import { createClient } from 'prismicio';
import { Metadata } from 'next';
import { asText } from '@prismicio/client';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('e_club');

  return {
    title: page.data.meta_title,
    description: asText(page.data.meta_description),
  };
}

type MergeField = {
  tag: string;
  options: {
    choices: string[];
  };
};

type GetOptionsResponse = {
  merge_fields: MergeField[];
};

const getOptions = async (): Promise<GetOptionsResponse> => {
  try {
    const res = await fetch(`https://us13.api.mailchimp.com/3.0/lists/afce920e8f/merge-fields`, {
      next: { revalidate: 3600 },
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `auth ${process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY}`,
      },
      method: 'GET',
    });

    return res.json() as Promise<GetOptionsResponse>;
  } catch (e) {
    throw new Error('Failed to fetch data');
  }
};

/* @ts-expect-error Server Component */
const EClub: FC = async () => {
  const data = await getOptions();

  const client = createClient();
  const page = await client.getSingle('e_club');

  const getRewardsSlice = page.data.slices.find((slice) => slice.slice_type === 'e_club_header') as
    | EClubHeaderSlice
    | undefined;
  const getBirthdayGiftSlice = page.data.slices.find((slice) => slice.slice_type === 'birthday_gift') as
    | BirthdayGiftSlice
    | undefined;
  const howDoesItWorkSlice = undefined;
  const formSlice = page.data.slices.find((slice) => slice.slice_type === 'form') as FormSlice | undefined;

  const optionMatch = data.merge_fields.find((field) => field.tag === 'MMERGE3');

  const choices = optionMatch === undefined ? [] : optionMatch.options.choices;

  return (
    <>
      {getRewardsSlice ? <GetRewards slice={getRewardsSlice} /> : null}
      {getBirthdayGiftSlice ? <GetBirthdayGift slice={getBirthdayGiftSlice} /> : null}
      {howDoesItWorkSlice ? <HowDoesItWork slice={howDoesItWorkSlice} /> : null}
      {formSlice ? <Form options={choices} slice={formSlice} /> : null}
    </>
  );
};

export default EClub;
