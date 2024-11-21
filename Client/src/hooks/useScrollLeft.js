export const useScrollLeft = (ref) => {
  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return scrollLeft;
};
