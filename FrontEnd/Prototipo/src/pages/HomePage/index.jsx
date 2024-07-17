import { useContext, useState, useRef, useEffect } from 'react';
import { DefaultTemplate, TempladeHorizontal } from '../../components/templade';
import { NavModal } from '../../components/fragments';
import { AppBehaviorContext } from '../../providers';

import {
  SectionBannerHomePage,
  SectionAboutHomePage,
  SectionMeEmail,
  SectionWorkplace,
} from '../../components/sectionsPage/sectionsHomePage';

import {
  useScreenWidth,
  useCardSwipe,
  useScreenHeight,
  useResponsive,
  useSectionVisibility,
  useCardAnimation,
  useScrollManagerChrome,
  useScrollManagerIsFirefox,
} from '../../hooks';

import styles from './styles.module.scss';

export const HomePage = () => {
  const { currentCard } = useContext(AppBehaviorContext);
  const [isOpen, setIsOpen] = useState(false);
  const { headerClass, sectionRefs } = useSectionVisibility();
  const { animate } = useCardAnimation(currentCard);

  const cards = [
    <SectionBannerHomePage key="banner" />,
    <SectionAboutHomePage key="about" />,
    <SectionWorkplace key="workplace" />,
    <SectionMeEmail key="email" />,
  ];

  const { handleTouchStart, handleTouchMove, handleTouchEnd } =
    useCardSwipe(cards);

  const isResponsive = useResponsive();

  const userAgent = window.navigator.userAgent.toLowerCase();
  const isChrome = /chrome/.test(userAgent);
  const isFirefox = /firefox/.test(userAgent);
  const isSafari = /safari/.test(userAgent);

  useScrollManagerChrome(
    currentCard,
    (isResponsive && isChrome) || (isResponsive && isSafari),
  );

  useScrollManagerIsFirefox(currentCard, isResponsive && isFirefox);

  useScreenWidth();
  useScreenHeight();

  return (
    <>
      {isResponsive ? (
        <DefaultTemplate setIsOpen={setIsOpen} headerClass={headerClass}>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {sectionRefs.map(({ ref }, index) => (
              <div key={index} ref={ref.ref}>
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
