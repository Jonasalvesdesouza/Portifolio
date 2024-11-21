import { useEffect } from 'react';

export const useIgnoreElements = (callback, refs) => {
  useEffect(() => {
    const handleOutclick = (event) => {
      const isClickOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target),
      );
      if (isClickOutside) {
        if (callback) callback();
      }
    };

    window.addEventListener('mousedown', handleOutclick);

    return () => {
      window.removeEventListener('mousedown', handleOutclick);
    };
  }, [refs, callback]);
};
