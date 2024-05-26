import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { SlArrowRight } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '../../../fragments';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useResponsive, useScreenWidth } from '../../../../hooks';
import { smallResolution } from '../../../../config';

import styles from './styles.module.scss';

export const SectionAboutHomePage = () => {
  const { setCurrentCard, screenWidth, screenHeight, setReturShapeHa } =
    useContext(AppBehaviorContext);

  const { profile } = useContext(UserAdmContext);

  useScreenWidth();

  const handleClick = () => {
    setCurrentCard(2);
  };
  const handleClickCurriculum = () => {
    setReturShapeHa(false);
    setCurrentCard(0);
  };

  return (
    <div
      className={`${useResponsive() ? '' : styles.aboutHomeContainerHorizontal}`}
    >
      <div
        className={`${useResponsive() ? styles.aboutHomeContainerVertical : ''}`}
      >
        <h1 className="title1">
          Hello <span className="title1 yellow">!</span> <br />
          My name is Jonas
        </h1>
        <p className="parapraph home">{profile?.bio}</p>

        <div className={`${styles.bntCurriculum} bntAboutHome`}>
          <Link to={'/curriculum'} onClick={handleClickCurriculum}>
            <span>CURRICULUM</span>
            <div>
              <SlArrowRight className="icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
