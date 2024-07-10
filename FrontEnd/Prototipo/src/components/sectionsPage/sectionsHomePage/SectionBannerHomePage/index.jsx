import { useContext } from 'react';

import { UserAdmContext, AppBehaviorContext } from '../../../../providers';
import { useRenderImage, useResponsive } from '../../../../hooks';
import styles from './styles.module.scss';

export const SectionBannerHomePage = () => {
  const { profile } = useContext(UserAdmContext);
  const { screenWidth } = useContext(AppBehaviorContext);

  const width = screenWidth <= 1050;

  const urlImage = useRenderImage(profile);

  console.log(width);
  return (
    <div
      className={`${useResponsive() ? `${styles.bannerContainerVertical}` : styles.bannerContainerHorizontal}`}
    >
      <div className={styles.bannerContainer}>
        <div className={styles.bannerLeft}>
          <h1 className={`title1 ${useResponsive() ? 'white' : ''}`}>
            Developer <br />
            <span className="title1 yellow">Full </span>
            Stack
            <span className="title1 yellow">.</span>
          </h1>
          <p
            className={` ${useResponsive() ? `parapraph homeMobile` : `parapraph home`}`}
          >
            {profile?.presentation}
          </p>
        </div>

        <div className={`${styles.bannerRight} `}>
          <img src={urlImage} alt="Image Jonas" />
        </div>
      </div>
    </div>
  );
};
