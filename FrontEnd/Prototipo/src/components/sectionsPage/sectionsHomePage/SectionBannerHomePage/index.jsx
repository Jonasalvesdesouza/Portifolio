import { useContext } from 'react';

import { UserAdmContext } from '../../../../providers';
import { useRenderImage, useResponsive } from '../../../../hooks';
import styles from './styles.module.scss';

export const SectionBannerHomePage = () => {
  const { profile } = useContext(UserAdmContext);

  const urlImage = useRenderImage(profile);

  return (
    <>
      <div>
        <div
          className={`${useResponsive() ? `${styles.bannerContainerVertical}` : styles.bannerContainerHorizontal}`}
        >
          <h1 className="title1">
            Devoloper <br />
            <span className="title1 yellow">Full </span>
            Stack
            <span className="title1 yellow">.</span>
          </h1>

          <div
            className={`${useResponsive() ? styles.middleSectionVertical : styles.middleSectionHorizontal} `}
          >
            <p
              className={` ${useResponsive() ? `parapraph homeMobile` : `parapraph home`}`}
            >
              {profile?.presentation}
            </p>
            <img src={urlImage} alt="Image Jonas" />
          </div>
        </div>
      </div>
    </>
  );
};
