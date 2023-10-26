import BlendTogether from '@components/pages/SmoothieFactory/Home/BlendTogether/BlendTogether';
import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import Header from '@components/pages/SmoothieFactory/Home/Header/Header';
import LetsConnect from '@components/pages/SmoothieFactory/Home/LetsConnect/LetsConnect';
import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';

import type { FC } from 'react';

export const metadata = {
  title: 'Smoothie Factory + Kitchen | A healthy lifestyle franchise company',
};

const Home: FC = () => (
  <>
    <Header />
    <WhatIsNew />
    <Gallery />
    <BlendTogether />
    <LetsConnect />
  </>
);

export default Home;
