import { useContext, forwardRef } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import {
	useGetLinkObject,
	useKeydown,
	useRemoveStringFromArray,
} from '../../../../hooks';
import { listPage } from './listPages';
import { CardListPage } from './cardListPage';
import { FilterCategoryArticles } from '../../filters/FilterCategoryArticles';

import styles from './styles.module.scss';

import IconLinkedinBlack from '../../../../assets/IconLinkedinBlack.svg';
import IconLinkedinYellow from '../../../../assets/IconLinkedinYellow.svg';

import IconGitHubBlack from '../../../../assets/IconGithubBlack.svg';
import IconGitHubYellow from '../../../../assets/IconGitHubYellow.svg';

import { FormSearchArticles } from '../../forms';
import { FilterProjects } from '../../filters/FilterProjects';

export const NavModal = forwardRef(
	({ closeModal, isClosing, closeNav }, ref) => {
		const { socialMediaList } = useContext(UserAdmContext);
		const { routeLocation, isOpenNav, screenWidth } =
			useContext(AppBehaviorContext);

		const linkLinkedin = useGetLinkObject(socialMediaList, 'linkedin');
		const linkGitHub = useGetLinkObject(socialMediaList, 'github');

		const ListPage = useRemoveStringFromArray(listPage, routeLocation);

		useKeydown(closeModal);

		const testRouterHomeEndCurriculum =
			routeLocation === '/' || routeLocation === '/curriculum';

		const isResponsiveEndRouter =
			!testRouterHomeEndCurriculum && screenWidth <= 1024;

		const sideAnimationRight = `${isOpenNav ? 'slide-in-right' : ''} ${isClosing ? 'slide-out-right' : ''}`;
		const sideAnimationTop = `${isOpenNav ? 'slide-in-top' : ''} ${isClosing ? 'slide-out-top' : ''}`;

		const router =
			routeLocation === '/articlepage' ||
			routeLocation === '/' ||
			routeLocation === '/curriculum';

		const styleBackground = router
			? { background: 'var(--color-blackLight)' }
			: { background: 'var(--color-Darkwhite)' };

		const iconGitHub = router ? IconGitHubYellow : IconGitHubBlack;
		const iconLinkedin = router ? IconLinkedinYellow : IconLinkedinBlack;
		const widthIcon = router ? { width: '65px' } : { width: '50px' };

		const customLinkClass = `${styles.modalBox} ${isResponsiveEndRouter ? styles.modalBoxProjectEndAticle : null} ${router ? styles.modalBoxWhite : styles.modalBoxGray}`;

		return (
			<div className={`${styles.modalOverlay}`} role="dialog">
				<div
					ref={ref}
					className={`${customLinkClass} ${!isResponsiveEndRouter ? sideAnimationRight : sideAnimationTop}`}
					style={styleBackground}
				>
					<div className={styles.middleModal}>
						{isResponsiveEndRouter ? (
							routeLocation === '/projects' ? (
								<FilterProjects closeModal={closeNav} />
							) : (
								<FilterCategoryArticles closeModal={closeNav} />
							)
						) : null}
						<div>
							<ul>
								{ListPage.map((page) => (
									<CardListPage
										key={page.id}
										page={page}
										closeModal={closeNav}
									/>
								))}
							</ul>
						</div>
					</div>

					<div className={styles.bottomModal}>
						{isResponsiveEndRouter ? (
							routeLocation === '/projects' ? (
								<div className={styles.formSearchPlaceholder}></div>
							) : (
								<div className={styles.formSearch}>
									<FormSearchArticles />
								</div>
							)
						) : null}

						<div className={styles.icons}>
							<div>
								<a
									href={linkLinkedin}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className={styles.iconLinkedin}
										style={widthIcon}
										src={iconLinkedin}
										alt="LinkedIn Icon"
									/>
								</a>
							</div>
							<div>
								<a href={linkGitHub} target="_blank" rel="noopener noreferrer">
									<img
										className={styles.iconGitHub}
										src={iconGitHub}
										alt="GitHub Icon"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
);
