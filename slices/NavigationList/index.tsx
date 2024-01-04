import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `NavigationList`.
 */
export type NavigationListProps = SliceComponentProps<Content.NavigationListSlice>;

/**
 * Component for "NavigationList" Slices.
 */
const NavigationList = ({ slice }: NavigationListProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for navigation_list (variation: {slice.variation}) Slices
    </section>
  );
};

export default NavigationList;
