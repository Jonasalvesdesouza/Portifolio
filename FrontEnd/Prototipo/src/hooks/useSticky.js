import { useEffect, useRef, useState } from 'react';

export const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const offsetTop = elementRef.current.getBoundingClientRect().top;
        setIsSticky(offsetTop === 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica inicialmente

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [isSticky, elementRef];
};
