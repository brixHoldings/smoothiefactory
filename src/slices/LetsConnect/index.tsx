import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `LetsConnect`.
 */
export type LetsConnectProps = SliceComponentProps<Content.LetsConnectSlice>;

/**
 * Component for "LetsConnect" Slices.
 */
const LetsConnect = ({ slice }: LetsConnectProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for lets_connect (variation: {slice.variation}) Slices
    </section>
  );
};

export default LetsConnect;
