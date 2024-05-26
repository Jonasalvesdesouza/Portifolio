import { useContext } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import styles from './styles.module.scss';
import { useResponsive } from '../../../../../hooks';

export const SectionMyLatestProjectsHomePage = () => {
  const { setCurrentCard, screenHeight, screenWidth } =
    useContext(AppBehaviorContext);

  const handleClick = () => {
    setCurrentCard(0);
  };

  return (
    <div
      className={`${useResponsive() ? styles.workplaceProjectContainerVertical : styles.workplaceProjectContainerHorizontal}`}
    >
      <h3 className="title1">
        My latest <br />
        <span className="title1 yellow">Projects.</span>
      </h3>
      <p
        className={`${useResponsive() ? `parapraph homeWorkMobile` : `parapraph homeWork`}`}
      >
        Check out some freelance projects and work completed during my learning
        journey as a full stack developer.
      </p>

      <div
        className={`${styles.btnContainer} bntWorkplace ${useResponsive() ? 'mobile' : ''} `}
      >
        <Link onClick={handleClick} to={'/projects'}>
          <span>SEE MY LATEST WORK</span>
          <span>
            <SlArrowRight className="icon" />
          </span>
        </Link>
      </div>
    </div>
  );
};
