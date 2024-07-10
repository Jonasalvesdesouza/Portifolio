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
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection1' },
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection2' },
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection3' },
    { ref: useInView({ threshold: 0.1 }), className: 'headerSection4' },
  ];

  useEffect(
    () => {
      const visibleSection = sectionRefs.find((section) => section.ref.inView);
      setHeaderClass(visibleSection ? visibleSection.className : '');
    },
    sectionRefs.map((section) => section.ref.inView),
  );

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
            {sectionRefs.map(({ ref }, index) => (
              <div className={styles.cardContainer} key={index} ref={ref.ref}>
                {cards[index]}
              </div>
            ))}
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
