import { useContext } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import { useResponsive } from '../../../../../hooks';

import styles from './styles.module.scss';

export const SectionReadMyBlogHomePage = () => {
  const { setCurrentCard } = useContext(AppBehaviorContext);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
    setCurrentCard(0);
  };

  const isResponsive = useResponsive();

  return (
    <div
      className={`${isResponsive ? styles.blogContainerVertical : styles.blogContainerHorizontal}`}
    >
      <div className={styles.blogHeader}>
        <h3 className={isResponsive ? 'title1 white' : 'title1 black'}>
          Let"s read{' '}
          <span className={isResponsive ? 'title1 white' : 'title1 black'}>
            my <span className="title1 yellow">blog!</span>
          </span>
        </h3>
        <p
          className={`${isResponsive ? `parapraph homeWorkMobile` : `parapraph homeWork`}`}
        >
          Welcome to my blog, where I'll share with you some of the knowledge
          I've acquired during my journey.
        </p>
      </div>

      <div className={`bntWorkplace ${isResponsive ? 'mobile' : ''}`}>
        <Link onClick={handleClick} to={'/blog'}>
          <span>READ MY ARTICLES</span>
          <span>
            <SlArrowRight className="icon" />
          </span>
        </Link>
      </div>
    </div>
  );
};
