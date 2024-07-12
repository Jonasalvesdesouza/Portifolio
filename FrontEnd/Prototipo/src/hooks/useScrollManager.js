export const useScrollManager = (currentCard) => {
  const positions = [0, 923, 1831, 2756];
  const position = positions[currentCard] || 0;

  const scrollToPosition = (position) => {
    window.addEventListener('wheel', (event) => event.preventDefault(), {
      passive: false,
    });
    window.addEventListener('touchmove', (event) => event.preventDefault(), {
      passive: false,
    });

    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };

  scrollToPosition(position);
};
