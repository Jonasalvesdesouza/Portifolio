import { useContext } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useRenderImage, useScreenWidth } from '../../../../hooks';
import { smallResolution } from '../../../../config';
import styles from './styles.module.scss';

export const SectionBannerHomePage = () => {
  const { setCurrentCard, screenWidth } = useContext(AppBehaviorContext);

  const { profile } = useContext(UserAdmContext);

  useScreenWidth();

  const handleClick = () => {
    setCurrentCard(1);
  };
  const urlImage = useRenderImage(profile);

  return (
    <div className={`${styles.bannerHomeContainer} container`}>
      <div className={`${styles.flexBox}`}>
        <div className={`${styles.apresentationContainer}`}>
          <h1 className="title1">
            Devoloper <br />
            <span className="title1 yellow">Full </span>
            Stack
            <span className="title1 yellow">.</span>
          </h1>
          <p className="parapraph home">{profile.presentation}</p>
        </div>

        <div>
          <img src={urlImage} alt="Image Jonas" />
        </div>
      </div>
      {screenWidth >= smallResolution ? (
        <Button id="button" onClick={handleClick}>
          <IoIosArrowDown size={120} color="#1b1f24" />
        </Button>
      ) : null}
    </div>
  );
};
