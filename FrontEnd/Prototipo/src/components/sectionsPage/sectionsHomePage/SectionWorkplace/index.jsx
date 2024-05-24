import { useContext } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext } from '../../../../providers';

import { SectionMyLatestProjectsHomePage } from './SectionMyLatestProjects';
import { SectionReadMyBlogHomePage } from './SectionReadMyBlog';
import { useScreenWidth } from '../../../../hooks';

import styles from './styles.module.scss';
import { smallResolution } from '../../../../config';

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
      className={`${isHeightHigh ? `${styles.workplaceContainerVertical} container` : styles.workplaceContainerHorizontal}`}
    >
      <SectionMyLatestProjectsHomePage />
      <SectionReadMyBlogHomePage />
    </div>
  );
};
