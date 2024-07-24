import { useContext } from 'react';
import { DefaultTemplate, TempladeHorizontal } from '../../components/templade';
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

export const HomePage = () => {
  const { currentCard } = useContext(AppBehaviorContext);

  const cards = [
    <SectionBannerHomePage key="banner" />,
    <SectionAboutHomePage key="about" />,
    <SectionWorkplace key="workplace" />,
    <SectionMeEmail key="email" />,
  ];

  const userAgent = window.navigator.userAgent.toLowerCase();
  const isChrome = /chrome/.test(userAgent);
  const isFirefox = /firefox/.test(userAgent);
  const isSafari = /safari/.test(userAgent);

  const isResponsive = useResponsive();

  const { handleTouchStart, handleTouchMove, handleTouchEnd, startY } =
    useCardSwipe(cards);
  const { headerClass, sectionRefs } = useSectionVisibility();
  const { animate } = useCardAnimation(currentCard);

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
        <DefaultTemplate headerClass={headerClass}>
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
        <TempladeHorizontal>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={animate ? 'fade-in' : ''}>{cards[currentCard]}</div>
          </div>
        </TempladeHorizontal>
      )}
    </>
  );
};
