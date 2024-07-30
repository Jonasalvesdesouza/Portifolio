import { useEffect, useState } from 'react';

export const useDynamicTopValue = () => {
  const [topValue, setTopValue] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newTopValue = `${-0.00195 * width + 11.5}vw`;

      setTopValue(newTopValue);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return topValue;
};
