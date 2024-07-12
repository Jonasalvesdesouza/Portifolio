import { useEffect, useRef } from 'react';

export const useScrollManager = (currentCard) => {
  const positions = useRef([0, 923, 1831, 2756]);
  const currentTimeout = useRef(null);

  useEffect(() => {
    const preventScroll = (event) => event.preventDefault();

    const addPreventScroll = () => {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    };

    const removePreventScroll = () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };

    const scrollToPosition = (position) => {
      if (currentTimeout.current) {
        clearTimeout(currentTimeout.current);
        removePreventScroll();
      }

      addPreventScroll();

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });

      currentTimeout.current = setTimeout(() => {
        requestAnimationFrame(removePreventScroll);
      });
    };

    const handleCurrentCardChange = () => {
      const position = positions.current[currentCard] || 0;
      scrollToPosition(position);
    };

    handleCurrentCardChange();

    return () => {
      if (currentTimeout.current) {
        clearTimeout(currentTimeout.current);
        removePreventScroll();
      }
    };
  }, [currentCard]);
};
