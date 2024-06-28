import { useEffect, useState } from 'react';

export const useDynamicTopValue = () => {
  const [topValue, setTopValue] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newTopValue = `${-0.00203 * width + 11.49}vw`;

      console.log('newTopValue: ', newTopValue);
      console.log('width: ', width);

      setTopValue(newTopValue);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return topValue;
};
