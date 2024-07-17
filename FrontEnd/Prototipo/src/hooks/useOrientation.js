import { useState, useEffect } from 'react';

export const useOrientation = () => {
  const [isVertical, setIsVertical] = useState(
    window.innerHeight > window.innerWidth || window.innerWidth < 1024,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isVertical };
};
