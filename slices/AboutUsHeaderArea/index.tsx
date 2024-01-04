import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `AboutUsHeaderArea`.
 */
export type AboutUsHeaderAreaProps = SliceComponentProps<Content.AboutUsHeaderAreaSlice>;

/**
 * Component for "AboutUsHeaderArea" Slices.
 */
const AboutUsHeaderArea = ({ slice }: AboutUsHeaderAreaProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for about_us_header_area (variation: {slice.variation}) Slices
    </section>
  );
};

export default AboutUsHeaderArea;
