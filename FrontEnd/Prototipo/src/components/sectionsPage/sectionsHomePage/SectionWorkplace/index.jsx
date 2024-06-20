import { useContext } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext } from '../../../../providers';

import { SectionMyLatestProjectsHomePage } from './SectionMyLatestProjects';
import { SectionReadMyBlogHomePage } from './SectionReadMyBlog';
import { useResponsive, useScreenWidth } from '../../../../hooks';

import styles from './styles.module.scss';

export const SectionWorkplace = () => {
  const { setCurrentCard, screenWidth, screenHeight } =
    useContext(AppBehaviorContext);

  useScreenWidth();

  return (
    <div
      className={`${useResponsive() ? styles.workplaceContainerVertical : styles.workplaceContainerHorizontal}`}
    >
      <SectionMyLatestProjectsHomePage />
      <SectionReadMyBlogHomePage />
    </div>
  );
};
