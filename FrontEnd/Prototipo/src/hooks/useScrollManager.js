import { useEffect } from 'react';

export const useScrollManager = (currentCard) => {
  useEffect(() => {
    const positions = [0, 923, 1831, 2756];
    const position = positions[currentCard] || 0;

    const preventScroll = (event) => {
      event.preventDefault();
    };

    const scrollToPosition = (position) => {
      window.addEventListener('wheel', preventScroll, {
        passive: false,
      });
      window.addEventListener('touchmove', preventScroll, {
        passive: false,
      });

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    };

    scrollToPosition(position);

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [currentCard]);
};
