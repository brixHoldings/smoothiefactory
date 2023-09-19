import LocationsLayout from '@layouts/LocationsLayout/LocationsLayout';

import type { FC, ReactNode } from 'react';

const LocationLayout: FC<{ children: ReactNode }> = ({ children }) => <LocationsLayout>{children}</LocationsLayout>;

export default LocationLayout;
