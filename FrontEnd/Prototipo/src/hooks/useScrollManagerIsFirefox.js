import { useEffect, useContext } from 'react';
import { AppBehaviorContext } from '../providers';

export const useScrollManagerIsFirefox = (currentCard, isResponsive) => {
  const { screenWidth } = useContext(AppBehaviorContext);

  useEffect(() => {
    if (screenWidth < 1024) {
      return;
    }

    if (isResponsive) {
      const sections = [
        { index: 0, key: 'banner' },
        { index: 1, key: 'about' },
        { index: 2, key: 'workplace' },
        { index: 3, key: 'email' },
      ];

      const position = sections.find(
        (section) => section.index === currentCard,
      );

      let lastScrollTime = 0;
      const scrollDelay = 100;

      const handleScroll = () => {
        const now = Date.now();
        if (now - lastScrollTime < scrollDelay) {
          return;
        }
        lastScrollTime = now;

        if (position) {
          const element = document.getElementById(position.key);
          if (element) {
            if (position.key === 'banner') {
              window.scrollTo({ behavior: 'smooth', top: 0 });
            } else {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      };

      const scrollHandler = () => {
        window.requestAnimationFrame(handleScroll);
      };

      window.addEventListener('scroll', scrollHandler, { passive: false });
      handleScroll();

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, [currentCard, isResponsive]);
};
