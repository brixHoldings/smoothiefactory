import SearchResults from '@components/pages/SmoothieFactory/OrangeLeaf/Locations/SearchResults/SearchResults';
import { getLocations } from '@utils/getLocations';
import { initialCoordinates } from '@constants/initialCoordinates';

import type { FC } from 'react';

export const metadata = {
  title: 'Locations | Smoothie Factory + Kitchen',
};

/* @ts-expect-error Server Component */
const Locations: FC = async () => {
  const {
    response: { locations },
  } = await getLocations(initialCoordinates.lat, initialCoordinates.lng);

  return <SearchResults initialLocations={locations} />;
};

export default Locations;
