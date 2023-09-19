import { createContext, useMemo, useContext, useState } from 'react';

import type { FC, ReactNode } from 'react';

type ContextValue = {
  setIsGoogleScriptLoaded: (value: boolean) => void;
  isGoogleScriptLoaded: boolean;
  footerHeight: number;
  setFooterHeight: (value: number) => void;
  navigationHeight: number;
  setNavigationHeight: (value: number) => void;
};

const StoreContext = createContext<ContextValue>({
  footerHeight: 0,
  isGoogleScriptLoaded: false,
  navigationHeight: 0,
  setFooterHeight: () => undefined,
  setIsGoogleScriptLoaded: () => undefined,
  setNavigationHeight: () => undefined,
});

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isGoogleScriptLoaded, setIsGoogleScriptLoaded] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const [navigationHeight, setNavigationHeight] = useState(0);

  const memoedValue = useMemo(
    () => ({
      footerHeight,
      isGoogleScriptLoaded,
      navigationHeight,
      setFooterHeight,
      setIsGoogleScriptLoaded,
      setNavigationHeight,
    }),
    [isGoogleScriptLoaded, setIsGoogleScriptLoaded, footerHeight, setFooterHeight, navigationHeight],
  );

  return <StoreContext.Provider value={memoedValue}>{children}</StoreContext.Provider>;
};

type UseStore = () => ContextValue;

export const useStore: UseStore = () => useContext(StoreContext);
