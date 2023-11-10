import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `BirthdayGift`.
 */
export type BirthdayGiftProps = SliceComponentProps<Content.BirthdayGiftSlice>;

/**
 * Component for "BirthdayGift" Slices.
 */
const BirthdayGift = ({ slice }: BirthdayGiftProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for birthday_gift (variation: {slice.variation}) Slices
    </section>
  );
};

export default BirthdayGift;
