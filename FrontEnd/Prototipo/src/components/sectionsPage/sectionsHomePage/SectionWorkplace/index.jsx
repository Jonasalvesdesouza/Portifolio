import { SectionMyLatestProjectsHomePage } from './SectionMyLatestProjects';
import { SectionReadMyBlogHomePage } from './SectionReadMyBlog';
import { useResponsive, useScreenWidth } from '../../../../hooks';

import styles from './styles.module.scss';

export const SectionWorkplace = () => {
  useScreenWidth();

  return (
    <div
      id="workplace"
      className={`${useResponsive() ? styles.workplaceContainerVertical : styles.workplaceContainerHorizontal}`}
    >
      <div className={styles.workplaceContainer}>
        <SectionMyLatestProjectsHomePage />
        <SectionReadMyBlogHomePage />
      </div>
    </div>
  );
};
