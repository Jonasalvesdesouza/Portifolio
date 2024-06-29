import { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { DefaultTemplate, TempladeHorizontal } from '../../components/templade';
import {
  SectionBannerHomePage,
  SectionAboutHomePage,
  SectionMeEmail,
  SectionWorkplace,
} from '../../components/sectionsPage/sectionsHomePage';

import { NavModal } from '../../components/fragments';
import { AppBehaviorContext } from '../../providers';

import {
  useScreenWidth,
  useCardSwipe,
  useScreenHeight,
  useResponsive,
} from '../../hooks';
import styles from './styles.module.scss';

export const HomePage = () => {
  const { currentCard } = useContext(AppBehaviorContext);
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [headerClass, setHeaderClass] = useState('');

  const sectionRefs = [
    useInView({ threshold: 0.1 }),
    useInView({ threshold: 0.1 }),
    useInView({ threshold: 0.1 }),
    useInView({ threshold: 0.1 }),
  ];

  const [section1Ref, inViewSection1] = sectionRefs[0];
  const [section2Ref, inViewSection2] = sectionRefs[1];
  const [section3Ref, inViewSection3] = sectionRefs[2];
  const [section4Ref, inViewSection4] = sectionRefs[3];

  useEffect(() => {
    const newHeaderClass = inViewSection1
      ? 'headerSection1'
      : inViewSection2
        ? 'headerSection2'
        : inViewSection3
          ? 'headerSection3'
          : inViewSection4
            ? 'headerSection4'
            : '';

    setHeaderClass(newHeaderClass);
  }, [inViewSection1, inViewSection2, inViewSection3, inViewSection4]);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentCard]);

  const cards = [
    <SectionBannerHomePage key="section1" />,
    <SectionAboutHomePage key="section2" />,
    <SectionWorkplace key="section3" />,
    <SectionMeEmail key="section4" />,
  ];

  const { handleTouchStart, handleTouchMove, handleTouchEnd } =
    useCardSwipe(cards);

  useScreenWidth();
  useScreenHeight();

  return (
    <>
      {useResponsive() ? (
        <DefaultTemplate setIsOpen={setIsOpen} headerClass={headerClass}>
          <div>
            <div ref={section1Ref}>{cards[0]}</div>
            <div ref={section2Ref}>{cards[1]}</div>
            <div ref={section3Ref}>{cards[2]}</div>
            <div ref={section4Ref}>{cards[3]}</div>
          </div>
        </DefaultTemplate>
      ) : (
        <TempladeHorizontal setIsOpen={setIsOpen}>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={animate ? styles.slide : ''}>
              {cards[currentCard]}
            </div>
          </div>
        </TempladeHorizontal>
      )}

      {isOpen && <NavModal setIsOpen={setIsOpen} isOpen={isOpen} />}
    </>
  );
};
