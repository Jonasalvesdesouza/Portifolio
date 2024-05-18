import { useContext } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext } from '../../../../providers';

import { SectionMyLatestProjectsHomePage } from './SectionMyLatestProjects';
import { SectionReadMyBlogHomePage } from './SectionReadMyBlog';
import { useScreenWidth } from '../../../../hooks';
import { smallResolution } from '../../../../config';

import styles from './styles.module.scss';

export const SectionWorkplace = () => {
  const { setCurrentCard, screenWidth } = useContext(AppBehaviorContext);

  useScreenWidth();

  const handleClick = () => {
    setCurrentCard(3);
  };

  return (
    <div className={`${styles.workplaceContainer}`}>
      <div className="flexBox">
        <SectionMyLatestProjectsHomePage />
        <SectionReadMyBlogHomePage />
      </div>
      {screenWidth >= smallResolution ? (
        <Button id="button" onClick={handleClick}>
          <IoIosArrowDown size={120} color="#1b1f24" />
        </Button>
      ) : null}
    </div>
  );
};
