import { useState } from 'react';
import { DefaultTemplate } from '../../components/templade';
import {
  SectionProjects,
  SectionTitleProjects,
} from '../../components/sectionsPage/sectionsProjectsPage';
import { useSticky } from '../../hooks';
import { FilterProjects, NavModal } from '../../components/fragments';

import styles from './styles.module.scss';

export const ProjectsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, filterRef] = useSticky();

  return (
    <>
      <DefaultTemplate
        setIsOpen={setIsOpen}
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
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
