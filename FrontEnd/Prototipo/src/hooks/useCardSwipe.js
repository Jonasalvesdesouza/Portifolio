import { useContext, useEffect, useState, useRef } from 'react';
import { AppBehaviorContext } from '../providers';

export const useCardSwipe = (cards) => {
  const { currentCard, setCurrentCard } = useContext(AppBehaviorContext);
  const [startY, setStartY] = useState(null);
  const isScrolling = useRef(false);

  const handleScroll = (e) => {
    if (isScrolling.current) return;

    isScrolling.current = true;
    const direction = e.deltaY > 0 ? 'up' : 'down';

    setCurrentCard((prevCard) => {
      if (direction === 'down' && prevCard > 0) {
        return prevCard - 1;
      }
      if (direction === 'up' && prevCard < cards.length - 1) {
        return prevCard + 1;
      }
      return prevCard;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 100); // Tempo de debounce para suavizar a troca
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [cards.length]);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isScrolling.current) return;

    const deltaY = e.touches[0].clientY - startY;
    if (deltaY > 50 && currentCard > 0) {
      isScrolling.current = true;
      setCurrentCard((prevCard) => prevCard - 1);
    } else if (deltaY < -50 && currentCard < cards.length - 1) {
      isScrolling.current = true;
      setCurrentCard((prevCard) => prevCard + 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 100); // Tempo de debounce para suavizar a troca
  };

  const handleTouchEnd = () => {
    setStartY(null);
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
