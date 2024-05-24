import { useContext } from 'react';

import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useRenderImage } from '../../../../hooks';
import styles from './styles.module.scss';

export const SectionBannerHomePage = () => {
  const { screenWidth, screenHeight } = useContext(AppBehaviorContext);

  const { profile } = useContext(UserAdmContext);

  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  const urlImage = useRenderImage(profile);

  return (
    <div>
      <div
        className={`${isHeightHigh ? `${styles.teste}` : styles.bannerContainerHorizontal}`}
      >
        <h1 className="title1">
          Devoloper <br />
          <span className="title1 yellow">Full </span>
          Stack
          <span className="title1 yellow">.</span>
        </h1>

        <div className={`${styles.middleSection} `}>
          <p className="parapraph home">{profile?.presentation}</p>
          <img src={urlImage} alt="Image Jonas" />
        </div>
      </div>
    </div>
  );
};
