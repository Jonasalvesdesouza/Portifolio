import { useContext } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext } from '../../../../providers';

import { SectionMyLatestProjectsHomePage } from './SectionMyLatestProjects';
import { SectionReadMyBlogHomePage } from './SectionReadMyBlog';
import { useScreenWidth } from '../../../../hooks';

import styles from './styles.module.scss';

export const SectionWorkplace = () => {
  const { setCurrentCard, screenWidth, screenHeight } =
    useContext(AppBehaviorContext);
  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  useScreenWidth();

  const handleClick = () => {
    setCurrentCard(3);
  };

  return (
    <div
      className={`${isHeightHigh ? '' : styles.workplaceContainerHorizontal}`}
    >
      <SectionMyLatestProjectsHomePage />
      <SectionReadMyBlogHomePage />

      {!isHeightHigh ? (
        <div className={`${styles.buttonHorizontal}`}>
          <Button id="button" onClick={handleClick}>
            <IoIosArrowDown className="arrowIcon" />
          </Button>
        </div>
      ) : null}
    </div>
  );
};
