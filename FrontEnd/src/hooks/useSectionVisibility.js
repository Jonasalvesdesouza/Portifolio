import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useSectionVisibility = () => {
  const sectionRefs = [
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection1' },
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection2' },
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection3' },
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection4' },
  ];

  const [headerClass, setHeaderClass] = useState('');

  useEffect(
    () => {
      const visibleSection = sectionRefs.find((section) => section.ref.inView);
      setHeaderClass(visibleSection ? visibleSection.className : '');
    },
    sectionRefs.map((section) => section.ref.inView),
  );

  return { headerClass, sectionRefs };
};
