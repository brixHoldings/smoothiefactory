import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomeEClub`.
 */
export type HomeEClubProps = SliceComponentProps<Content.HomeEClubSlice>;

/**
 * Component for "HomeEClub" Slices.
 */
const HomeEClub = ({ slice }: HomeEClubProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for home_e_club (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomeEClub;
