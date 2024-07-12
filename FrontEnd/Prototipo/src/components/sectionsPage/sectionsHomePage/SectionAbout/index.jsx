import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useResponsive, useScreenWidth } from '../../../../hooks';
import styles from './styles.module.scss';

export const SectionAboutHomePage = () => {
  const { setCurrentCard, setReturShapeHa } = useContext(AppBehaviorContext);
  const { profile } = useContext(UserAdmContext);

  useScreenWidth();

  const handleClickCurriculum = () => {
    setReturShapeHa(false);
    setCurrentCard(0);
  };

  const isResponsive = useResponsive();

  return (
    <div
      className={
        isResponsive
          ? styles.aboutHomeContainerVertical
          : styles.aboutHomeContainerHorizontal
      }
    >
      <div className={styles.aboutContainer}>
        <div className={styles.headerAbout}>
          <h1 className="title1">
            Hello <span className="title1 yellow">!</span> <br />
            My name is Jonas
          </h1>
          <p className="parapraph home">{profile?.bio}</p>
        </div>
        <div className={`${styles.bntCurriculum} bntAboutHome`}>
          <Link to="/curriculum" onClick={handleClickCurriculum}>
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
