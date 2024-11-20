import { useContext } from 'react';

import { UserAdmContext } from '../../../../providers';
import { useRenderImage, useResponsive } from '../../../../hooks';
import styles from './styles.module.scss';

export const SectionBannerHomePage = () => {
	const { profile } = useContext(UserAdmContext);

	const urlImage = useRenderImage(profile);
	const isResponsive = useResponsive();

	const classContainer = `${isResponsive ? `${styles.bannerContainerVertical}` : styles.bannerContainerHorizontal}`;

	return (
		<div id="banner" className={classContainer}>
			<div className={styles.bannerContainer}>
				<div className={styles.bannerLeft}>
					<h1 className={`title1 black ${isResponsive ? 'white' : ''}`}>
						Developer <br />
						<span className="title1 yellow">Full </span>
						Stack
						<span className="title1 yellow">.</span>
					</h1>
					<p
						className={` ${isResponsive ? `parapraph homeMobile` : `parapraph home`}`}
					>
						{profile?.presentation}
					</p>
				</div>

				<div className={`${styles.bannerRight}`}>
					<img src={urlImage} alt="Image Jonas" />
				</div>
			</div>
		</div>
	);
};
