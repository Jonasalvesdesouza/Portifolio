import { useContext } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import styles from './styles.module.scss';
import { useResponsive } from '../../../../../hooks';

export const SectionReadMyBlogHomePage = () => {
  const { setCurrentCard, screenWidth, screenHeight } =
    useContext(AppBehaviorContext);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
    setCurrentCard(0);
  };

  return (
    <div
      className={`${useResponsive() ? styles.blogContainerVertical : styles.blogContainerHorizontal}`}
    >
      <div>
        <h3 className="title1">
          Let"s read{' '}
          <span className="title1">
            my <span className="title1 yellow">blog!</span>
          </span>
        </h3>
        <p
          className={`${useResponsive() ? `parapraph homeWorkMobile` : `parapraph homeWork`}`}
        >
          Welcome to my blog, where I'll share with you some of the knowledge
          I've acquired during my journey.
        </p>
      </div>

      <div className={`bntWorkplace ${useResponsive() ? 'mobile' : ''}`}>
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
