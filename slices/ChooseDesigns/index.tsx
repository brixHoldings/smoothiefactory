import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ChoseDesigns`.
 */
export type ChoseDesignsProps = SliceComponentProps<Content.ChoseDesignsSlice>;

/**
 * Component for "ChoseDesigns" Slices.
 */
const ChoseDesigns = ({ slice }: ChoseDesignsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for chose_designs (variation: {slice.variation}) Slices
    </section>
  );
};

export default ChoseDesigns;
