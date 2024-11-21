import { useEffect, useState } from 'react';

export const useCardAnimation = (currentCard) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentCard]);

  return { animate };
};
