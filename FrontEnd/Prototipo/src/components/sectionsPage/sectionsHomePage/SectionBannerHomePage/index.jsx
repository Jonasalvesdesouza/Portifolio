import { useContext } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useRenderImage } from '../../../../hooks';
import { smallResolution } from '../../../../config';
import styles from './styles.module.scss';

export const SectionBannerHomePage = () => {
  const { setCurrentCard, screenWidth, screenHeight } =
    useContext(AppBehaviorContext);

  const { profile } = useContext(UserAdmContext);

  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  const handleClick = () => {
    setCurrentCard(1);
  };
  const urlImage = useRenderImage(profile);

  return (
    <div>
      <div
        className={`${isHeightHigh ? '' : styles.bannerContainerHorizontal}`}
      >
        <div
          className={`${isHeightHigh ? '' : styles.apresentationContainerHorizontal}`}
        >
          <div
            className={`${isHeightHigh ? '' : styles.titleContainerHorizontal}`}
          >
            <h1 className="title1">
              Devoloper <br />
              <span className="title1 yellow">Full </span>
              Stack
              <span className="title1 yellow">.</span>
            </h1>
          </div>

          <div
            className={`${isHeightHigh ? '' : styles.middleSectionHorizontal}`}
          >
            <div
              className={`${isHeightHigh ? '' : styles.presentationHorizontal}`}
            >
              <p className="parapraph home">{profile.presentation}</p>
            </div>
            <div className={`${styles.imgContainerHorizontal}`}>
              <img src={urlImage} alt="Image Jonas" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${isHeightHigh ? '' : styles.buttonHorizontal}`}>
        {!isHeightHigh ? (
          <Button id="button" onClick={handleClick}>
            <IoIosArrowDown className="arrowIcon" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};
