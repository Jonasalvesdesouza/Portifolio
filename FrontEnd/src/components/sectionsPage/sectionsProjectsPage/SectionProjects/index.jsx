import { useContext, useRef } from 'react';
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

const ProjectSection = ({ title, projects, refProp }) => (
  <div className={styles.projectSection}>
    <h2 className="title2 gray">{title}</h2>
    <div className={styles.listProjects}>
      {projects.length >= 4 && (
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

  return (
    <div className={styles.projectContainer}>
      <ProjectSection
        title="Independent Projects."
        projects={independentProjects}
        refProp={independentRef}
      />
      <ProjectSection
        title="Study Projects"
        projects={studyProjects}
        refProp={studyRef}
      />
    </div>
  );
};
