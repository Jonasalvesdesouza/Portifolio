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
    window.scrollTo({ top: 0 });
  };

  const isResponsive = useResponsive();

  return (
    <div
      id="about"
      className={
        isResponsive
          ? styles.aboutHomeContainerVertical
          : styles.aboutHomeContainerHorizontal
      }
    >
      <div className={styles.aboutContainer}>
        <div className={styles.headerAbout}>
          <h1 className="title1 black">
            Hello <span className="title1 yellow">!</span> <br />
            My name is Jonas<span className="title1 yellow">.</span>
          </h1>
          <p
            className={` ${isResponsive ? `parapraph homeMobile` : `parapraph home`}`}
          >
            {profile?.bio}
          </p>
        </div>
        <div className="bntAboutHome">
          <Link to="/curriculum" onClick={handleClickCurriculum}>
            <span>CURRICULUM</span>
            <SlArrowRight className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};
