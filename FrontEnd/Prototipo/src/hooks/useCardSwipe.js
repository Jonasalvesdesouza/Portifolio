import { useContext, useEffect, useState } from 'react';
import { AppBehaviorContext } from '../providers';

export const useCardSwipe = (cards) => {
  const { currentCard, setCurrentCard } = useContext(AppBehaviorContext);
  const [startY, setStartY] = useState(null);

  const handleScroll = (e) => {
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
    const deltaY = e.touches[0].clientY - startY;
    if (deltaY > 50 && currentCard > 0) {
      setCurrentCard((prevCard) => prevCard - 1);
    } else if (deltaY < -50 && currentCard < cards.length - 1) {
      setCurrentCard((prevCard) => prevCard + 1);
    }
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
