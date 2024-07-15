import { useEffect } from 'react';

export const useScrollManagerChrome = (currentCard, isResponsive) => {
  useEffect(() => {
    if (isResponsive) {
      const array = [
        { index: 0, key: 'banner' },
        { index: 1, key: 'about' },
        { index: 2, key: 'workplace' },
        { index: 3, key: 'email' },
      ];
      const position = array.find((item) => item.index === currentCard);

      const preventScroll = (event) => {
        event.preventDefault();
      };

      const scrollToPosition = (position) => {
        try {
          window.removeEventListener('wheel', preventScroll, {
            passive: false,
          });
          window.removeEventListener('touchmove', preventScroll, {
            passive: false,
          });

          if (position) {
            if (position.key === 'banner') {
              return window.scrollTo({ behavior: 'smooth', top: 0 });
            }
            const element = document.getElementById(position.key);

            if (element) {
              return element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } catch (error) {
          console.log(error);
        } finally {
          window.addEventListener('wheel', preventScroll, {
            passive: false,
          });
          window.addEventListener('touchmove', preventScroll, {
            passive: false,
          });
        }

        return false;
      };

      scrollToPosition(position);

      return () => {
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [currentCard, isResponsive]);
};
