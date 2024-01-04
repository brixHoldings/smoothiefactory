import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `MenuLeftAlignedItem`.
 */
export type MenuLeftAlignedItemProps = SliceComponentProps<Content.MenuLeftAlignedItemSlice>;

/**
 * Component for "MenuLeftAlignedItem" Slices.
 */
const MenuLeftAlignedItem = ({ slice }: MenuLeftAlignedItemProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for menu_left_aligned_item (variation: {slice.variation}) Slices
    </section>
  );
};

export default MenuLeftAlignedItem;
