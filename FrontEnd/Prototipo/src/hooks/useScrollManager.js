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

    const removeListeners = () => {
      window.removeEventListener('wheel', (event) => event.preventDefault());
      window.removeEventListener('touchmove', (event) =>
        event.preventDefault(),
      );
    };

    setTimeout(() => {
      requestAnimationFrame(removeListeners);
    }, 3000);
  };

  scrollToPosition(position);
};
