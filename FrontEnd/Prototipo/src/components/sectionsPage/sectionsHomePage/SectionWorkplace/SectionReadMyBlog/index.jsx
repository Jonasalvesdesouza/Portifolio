import { useContext } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import styles from './styles.module.scss';

export const SectionReadMyBlogHomePage = () => {
  const { setCurrentCard, screenWidth, screenHeight } =
    useContext(AppBehaviorContext);
  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  const handleClick = () => {
    setCurrentCard(0);
  };

  return (
    <div
      className={`${isHeightHigh ? '' : styles.workplaceBlogContainerHorizontal}`}
    >
      <div>
        <h3 className="title1">
          Let"s read <br />
          my <span className="title1 yellow">blog!</span>
        </h3>
        <p className="parapraph home">
          Welcome to my blog, where I'll share with you some of the knowledge
          I've acquired during my journey.
        </p>
      </div>

      <div className={`${styles.btnContainer} bntWorplace2`}>
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
