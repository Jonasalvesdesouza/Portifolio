import { useEffect, useState, useCallback } from 'react';

export const useIntersectionObserver = (options) => {
  const [currentSection, setCurrentSection] = useState(null);

  const observe = useCallback(
    (element) => {
      if (!element) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target);
          }
        });
      }, options);

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    },
    [options],
  );

  return { currentSection, observe };
};
