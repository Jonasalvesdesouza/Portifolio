import { useContext, useEffect, useState } from 'react';
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
  useScrollManager,
} from '../../hooks';
import styles from './styles.module.scss';

export const HomePage = () => {
  const { currentCard } = useContext(AppBehaviorContext);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(0);

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

  useScreenWidth();
  useScreenHeight();

  useScrollManager(currentCard);

  return (
    <>
      {useResponsive() ? (
        <DefaultTemplate setIsOpen={setIsOpen} headerClass={headerClass}>
          <div>
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
