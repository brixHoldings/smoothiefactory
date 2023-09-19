'use client';

import { ContentWrapper } from './LocationsLayout.styles';

import { useStore } from 'src/context/StoreProvider';

import type { FC, ReactNode } from 'react';

export type Marker = { lat: number; lng: number; id: number };

export const LocationsLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { footerHeight, navigationHeight } = useStore();

  return (
    <ContentWrapper footerHeight={footerHeight} navigationHeight={navigationHeight}>
      {children}
    </ContentWrapper>
  );
};

export default LocationsLayout;
