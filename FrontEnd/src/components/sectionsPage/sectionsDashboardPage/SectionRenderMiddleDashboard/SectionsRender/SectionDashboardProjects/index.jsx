import { useContext, useRef } from 'react';
import {
  AppBehaviorContext,
  UserAdmContext,
} from '../../../../../../providers';
import { InsertProjectModal } from '../../../../../fragments';
import { ProjectSection } from './ProjectSection';
import {
  useFilterSubCategory,
  useScrollArrowsVisibility,
} from '../../../../../../hooks';
import styles from './styles.module.scss';

export const SectionDashboardProjects = () => {
  const { isOpenDashboard, setIsOpenDashboard } =
    useContext(AppBehaviorContext);
  const { projectsList } = useContext(UserAdmContext);

  const independentProjects = useFilterSubCategory(projectsList, 'Independent');
  const studyProjects = useFilterSubCategory(projectsList, 'Study');

  const independentRef = useRef(null);
  const studyRef = useRef(null);

  const [showIndependentArrows, showStudyArrows, scrollContainer] =
    useScrollArrowsVisibility(independentRef, studyRef);

  return (
    <>
      <div className={styles.projectsContainer}>
        <ProjectSection
          title="Independent Projects"
          projects={independentProjects}
          refProp={independentRef}
          showArrows={showIndependentArrows}
          scrollContainer={scrollContainer}
          direction="left"
        />
        <ProjectSection
          title="Study Projects"
          projects={studyProjects}
          refProp={studyRef}
          showArrows={showStudyArrows}
          scrollContainer={scrollContainer}
          direction="right"
        />
      </div>

      {isOpenDashboard && (
        <InsertProjectModal setIsOpenDashboard={setIsOpenDashboard} />
      )}
    </>
  );
};
