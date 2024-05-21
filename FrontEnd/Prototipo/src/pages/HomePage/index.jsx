import { useContext, useEffect, useState } from 'react';

import { DefaultTemplate, TempladeHorizontal } from '../../components/templade';
import {
  SectionBannerHomePage,
  SectionAboutHomePage,
  SectionMeEmail,
  SectionWorkplace,
} from '../../components/sectionsPage/sectionsHomePage';

import { NavModal } from '../../components/fragments';
import { AppBehaviorContext } from '../../providers';

import { useScreenWidth, useCardSwipe, useScreenHeight } from '../../hooks';
import styles from './styles.module.scss';
import { smallResolution } from '../../config';

export const HomePage = () => {
  const { screenWidth, screenHeight, currentCard } =
    useContext(AppBehaviorContext);

  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); // tempo da animação deve coincidir com a duração da animação CSS
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

  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  return (
    <>
      {isHeightHigh ? (
        <DefaultTemplate setIsOpen={setIsOpen}>
          <div>
            <SectionBannerHomePage />
            <SectionAboutHomePage />
            <SectionWorkplace />
            <SectionMeEmail />
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
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
