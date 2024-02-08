import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingHowTo`.
 */
export type FranchisingHowToProps = SliceComponentProps<Content.FranchisingHowToSlice>;

/**
 * Component for "FranchisingHowTo" Slices.
 */
const FranchisingHowTo = ({ slice }: FranchisingHowToProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_how_to (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingHowTo;
