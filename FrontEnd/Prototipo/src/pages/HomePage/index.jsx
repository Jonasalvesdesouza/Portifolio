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

  const { ref: section1Ref, inView: inViewSection1 } = useInView({
    threshold: 0.1,
  });
  const { ref: section2Ref, inView: inViewSection2 } = useInView({
    threshold: 0.1,
  });
  const { ref: section3Ref, inView: inViewSection3 } = useInView({
    threshold: 0.1,
  });
  const { ref: section4Ref, inView: inViewSection4 } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    let newHeaderClass = '';

    if (inViewSection1) {
      newHeaderClass = 'headerSection1';
    } else if (inViewSection2) {
      newHeaderClass = 'headerSection2';
    } else if (inViewSection3) {
      newHeaderClass = 'headerSection3';
    } else if (inViewSection4) {
      newHeaderClass = 'headerSection4';
    }

    setHeaderClass(newHeaderClass);
  }, [inViewSection1, inViewSection2, inViewSection3, inViewSection4]);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentCard]);

  const cards = [
    <SectionBannerHomePage />,
    <SectionAboutHomePage />,
    <SectionWorkplace />,
    <SectionMeEmail />,
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
            <div ref={section1Ref}>
              <SectionBannerHomePage />
            </div>
            <div ref={section2Ref}>
              <SectionAboutHomePage />
            </div>
            <div ref={section3Ref}>
              <SectionWorkplace />
            </div>
            <div ref={section4Ref}>
              <SectionMeEmail />
            </div>
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

      {isOpen ? <NavModal setIsOpen={setIsOpen} isOpen={isOpen} /> : null}
    </>
  );
};
