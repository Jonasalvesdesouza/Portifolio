import { useContext, useRef, useState, useEffect } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import {
  useFilterProjects,
  useFilterSubCategory,
  useScrollLeft,
  useScrollRight,
} from '../../../../hooks';

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { ProjectCard } from './ProjectCard';

import styles from './styles.module.scss';

const ProjectSection = ({ title, projects, refProp, showArrows }) => (
  <div className={styles.projectSection}>
    <h2 className="title2 gray">{title}</h2>
    <div className={styles.listProjects}>
      {showArrows && (
        <>
          <button className={styles.left} onClick={useScrollLeft(refProp)}>
            <IoIosArrowDropleftCircle className={styles.arrowIcon} />
          </button>
          <button className={styles.right} onClick={useScrollRight(refProp)}>
            <IoIosArrowDroprightCircle className={styles.arrowIcon} />
          </button>
        </>
      )}
      <ul ref={refProp}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  </div>
);

export const SectionProjects = () => {
  const { categorysProject } = useContext(AppBehaviorContext);
  const { projectsList: allProjectsList } = useContext(UserAdmContext);
  const filteredProjectsList = useFilterProjects();

  const projectsList =
    categorysProject === '' ? allProjectsList : filteredProjectsList;
  const independentProjects = useFilterSubCategory(projectsList, 'Independent');
  const studyProjects = useFilterSubCategory(projectsList, 'Study');

  const independentRef = useRef(null);
  const studyRef = useRef(null);

  const [showIndependentArrows, setShowIndependentArrows] = useState(false);
  const [showStudyArrows, setShowStudyArrows] = useState(false);

  useEffect(() => {
    const checkScrollArrowsVisibility = () => {
      if (independentRef.current && studyRef.current) {
        const independentWidth = independentRef.current.scrollWidth;
        const studyWidth = studyRef.current.scrollWidth;
        const containerWidth = independentRef.current.clientWidth;

        setShowIndependentArrows(independentWidth > containerWidth);
        setShowStudyArrows(studyWidth > containerWidth);
      }
    };

    checkScrollArrowsVisibility();
    window.addEventListener('resize', checkScrollArrowsVisibility);

    return () => {
      window.removeEventListener('resize', checkScrollArrowsVisibility);
    };
  }, [independentProjects, studyProjects]);

  return (
    <div className={styles.projectContainer}>
      <ProjectSection
        title="Independent Projects."
        projects={independentProjects}
        refProp={independentRef}
        showArrows={showIndependentArrows}
      />
      <ProjectSection
        title="Study Projects"
        projects={studyProjects}
        refProp={studyRef}
        showArrows={showStudyArrows}
      />
    </div>
  );
};
