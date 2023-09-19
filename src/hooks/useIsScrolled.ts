import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useIsScrolled = (): boolean => {
  const [scrolled, setScrolled] = useState(typeof window !== 'undefined' && window.scrollY > 0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (typeof window !== 'undefined' && window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }, 50);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolled;
};

export default useIsScrolled;
