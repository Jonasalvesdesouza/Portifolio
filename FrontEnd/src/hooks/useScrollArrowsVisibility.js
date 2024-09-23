import { useEffect, useState } from 'react';

export const useScrollArrowsVisibility = (ref1, ref2) => {
  const [showArrows1, setShowArrows1] = useState(false);
  const [showArrows2, setShowArrows2] = useState(false);

  useEffect(() => {
    const checkScrollArrowsVisibility = () => {
      if (ref1.current && ref2.current) {
        const width1 = ref1.current.scrollWidth;
        const width2 = ref2.current.scrollWidth;
        const containerWidth1 = ref1.current.clientWidth;
        const containerWidth2 = ref2.current.clientWidth;

        setShowArrows1(width1 > containerWidth1);
        setShowArrows2(width2 > containerWidth2);
      }
    };

    checkScrollArrowsVisibility();
    window.addEventListener('resize', checkScrollArrowsVisibility);

    return () => {
      window.removeEventListener('resize', checkScrollArrowsVisibility);
    };
  }, [ref1, ref2]);

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const itemWidth = 400;
      const itemsToScroll = 4;
      const scrollAmount = itemWidth * itemsToScroll;

      ref.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return [showArrows1, showArrows2, scrollContainer];
};
