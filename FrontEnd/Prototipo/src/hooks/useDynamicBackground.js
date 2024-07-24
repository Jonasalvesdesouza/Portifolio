import { useEffect, useState } from 'react';

export const useDynamicBackground = () => {
  const [backgroundValue, setBackgroundValue] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const blackPercentage = Math.max(17, Math.min(25, 0.025 * width - 0.5));
      const newBackgroundValue = `linear-gradient(
        to bottom,
        var(--color-black) 0%,
        var(--color-black) ${blackPercentage}%,
        var(--color-white) ${blackPercentage}%,
        var(--color-white) 100%
      )`;
      setBackgroundValue(newBackgroundValue);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return backgroundValue;
};
