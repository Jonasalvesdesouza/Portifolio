import { useContext, useEffect, useState } from 'react';

import { DefaultTemplate, TempladeHorizontal } from '../../components/templade';
import { SpinnerColorRing } from '../../components/fragments';
import { AppBehaviorContext, UserAdmContext } from '../../providers';

import { SectionsPageHome } from '../../data';

import {
	useScreenWidth,
	useCardSwipe,
	useScreenHeight,
	useResponsive,
	useSectionVisibility,
	useCardAnimation,
	useScrollManagerChrome,
	useScrollManagerIsFirefox,
	useRenderCheckObject,
} from '../../hooks';

export const HomePage = () => {
	const { currentCard } = useContext(AppBehaviorContext);
	const { profile } = useContext(UserAdmContext);

	const isLoading = useRenderCheckObject(profile.image);

	const userAgent = window.navigator.userAgent.toLowerCase();
	const isChrome = /chrome/.test(userAgent);
	const isFirefox = /firefox/.test(userAgent);
	const isSafari = /safari/.test(userAgent);

	const isResponsive = useResponsive();

	const { handleTouchStart, handleTouchMove, handleTouchEnd } =
		useCardSwipe(SectionsPageHome);
	const { headerClass, sectionRefs } = useSectionVisibility(SectionsPageHome);
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
				<DefaultTemplate
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					headerClass={headerClass}
				>
					{isLoading ? (
						<SpinnerColorRing isResponsive={isResponsive} />
					) : (
						sectionRefs.map(({ ref }, index) => (
							<div key={index} ref={ref.ref}>
								{SectionsPageHome[index]}
							</div>
						))
					)}
				</DefaultTemplate>
			) : (
				<TempladeHorizontal
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<div className={animate ? 'fade-in' : ''}>
						{isLoading ? (
							<SpinnerColorRing isResponsive={isResponsive} />
						) : (
							SectionsPageHome[currentCard]
						)}
					</div>
				</TempladeHorizontal>
			)}
		</>
	);
};
