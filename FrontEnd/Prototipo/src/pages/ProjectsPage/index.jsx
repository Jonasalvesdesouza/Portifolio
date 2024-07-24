import { DefaultTemplate } from '../../components/templade';
import {
  SectionProjects,
  SectionTitleProjects,
} from '../../components/sectionsPage/sectionsProjectsPage';
import { useSticky } from '../../hooks';
import { FilterProjects } from '../../components/fragments';

import styles from './styles.module.scss';

export const ProjectsPage = () => {
  const [isSticky, filterRef] = useSticky();

  return (
    <>
      <DefaultTemplate
        isSticky={isSticky}
        topContent={
          isSticky ? (
            <>
              <FilterProjects isSticky={isSticky} />
            </>
          ) : null
        }
      >
        <div className={styles.sectionProjectContainer}>
          <div className={styles.header}>
            <SectionTitleProjects />
          </div>
          <div className={`${styles.filterContainer}`} ref={filterRef}>
            <FilterProjects />
          </div>
          <div className={styles.sectionProject}>
            <SectionProjects />
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
