import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomeInfoSection`.
 */
export type HomeInfoSectionProps = SliceComponentProps<Content.HomeInfoSectionSlice>;

/**
 * Component for "HomeInfoSection" Slices.
 */
const HomeInfoSection = ({ slice }: HomeInfoSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for home_info_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomeInfoSection;
