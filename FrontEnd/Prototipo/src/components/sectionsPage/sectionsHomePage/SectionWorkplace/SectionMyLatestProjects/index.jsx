import { useContext } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import { useResponsive } from '../../../../../hooks';
import styles from './styles.module.scss';

export const SectionMyLatestProjectsHomePage = () => {
  const { setCurrentCard } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setCurrentCard(0);
    window.scrollTo({ top: 0 });
  };

  const isResponsive = useResponsive();

  return (
    <div
      className={
        isResponsive
          ? styles.projectContainerVertical
          : styles.projectContainerHorizontal
      }
    >
      <div className={styles.projectHeader}>
        <h3 className="title1">
          My latest <br />
          <span className="title1 yellow">Projects.</span>
        </h3>
        <p
          className={
            isResponsive ? 'parapraph homeWorkMobile' : 'parapraph homeWork'
          }
        >
          Check out some freelance projects and work completed during my
          learning journey as a full stack developer.
        </p>
      </div>
      <div className={`bntWorkplace ${isResponsive ? 'mobile' : ''}`}>
        <Link onClick={handleClick} to="/projects">
          <span>SEE MY LATEST WORK</span>
          <span>
            <SlArrowRight className="icon" />
          </span>
        </Link>
      </div>
    </div>
  );
};
