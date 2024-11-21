import { useContext } from 'react';
import { AppBehaviorContext } from '../../providers';

import { DefaultTemplate } from '../../components/templade';
import {
  SectionProjects,
  SectionTopProjects,
} from '../../components/sectionsPage/sectionsProjectsPage';
import { useSticky } from '../../hooks';
import { FilterProjects } from '../../components/fragments';

import styles from './styles.module.scss';

export const ProjectsPage = () => {
  const { screenWidth } = useContext(AppBehaviorContext);

  const [isSticky, filterRef] = useSticky();

  const isResponsive = screenWidth <= 1024;

  return (
    <>
      <DefaultTemplate
        isSticky={isSticky}
        topContent={
          isResponsive ? null : isSticky ? (
            <>
              <FilterProjects isSticky={isSticky} />
            </>
          ) : null
        }
      >
        <div className={styles.sectionProjectContainer}>
          <div className={styles.header}>
            <SectionTopProjects />
          </div>
          <div className={`${styles.filterContainer}`} ref={filterRef}>
            {isResponsive ? null : <FilterProjects />}
          </div>
          <div className={styles.sectionProject}>
            <SectionProjects />
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
