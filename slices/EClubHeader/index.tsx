import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `EClubHeader`.
 */
export type EClubHeaderProps = SliceComponentProps<Content.EClubHeaderSlice>;

/**
 * Component for "EClubHeader" Slices.
 */
const EClubHeader = ({ slice }: EClubHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for e_club_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default EClubHeader;
