import { useContext, useEffect, useState } from 'react'
import { AppBehaviorContext } from '../providers'

export const useCardSwipe = (cards) => {
  const { currentCard, setCurrentCard  } = useContext(AppBehaviorContext)
     
  const [ startY, setStartY ] = useState(null)
  const [ scrollDirection, setScrollDirection ] = useState(null)

  
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setScrollDirection('up');
    } else if (e.deltaY < 0) {
      setScrollDirection('down');
    }
  };

  useEffect(() => {
    if (scrollDirection === 'down') {
      handleSwipeDownMouse();
    } else if (scrollDirection === 'up') {
      handleSwipeUpMouse();
    }
    setScrollDirection(null);
  }, [scrollDirection]);

  const handleSwipeUpMouse = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const handleSwipeDownMouse = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e) => {
    const deltaY = e.touches[0].clientY - startY
    if (deltaY > 50) {
      handleSwipeDown()
    } else if (deltaY < -50) {
      handleSwipeUp()
    }
  }

  const handleTouchEnd = () => {
    setStartY(null)
  }

  const handleSwipeUp = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
    }
  }

  const handleSwipeDown = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
    }
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}


