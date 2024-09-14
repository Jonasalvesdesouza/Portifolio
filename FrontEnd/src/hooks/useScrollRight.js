export const useScrollRight = (ref) => {
  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return scrollRight;
};
