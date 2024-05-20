import { useContext, useState } from 'react';

import { DefaultTemplate, TempladeDesktop } from '../../components/templade';
import {
  SectionBannerHomePage,
  SectionAboutHomePage,
  SectionMeEmail,
  SectionWorkplace,
} from '../../components/sectionsPage/sectionsHomePage';

import { NavModal } from '../../components/fragments';
import { AppBehaviorContext } from '../../providers';

import { useScreenWidth, useCardSwipe, useScreenHeight } from '../../hooks';

export const HomePage = () => {
  const { screenWidth, screenHeight, currentCard } =
    useContext(AppBehaviorContext);

  const [isOpen, setIsOpen] = useState(false);

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
        <TempladeDesktop setIsOpen={setIsOpen}>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cards[currentCard]}
          </div>
        </TempladeDesktop>
      )}
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
