import { useContext } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useFilterProjects, useFilterSubCategory } from '../../../../hooks';

import { ProjectCard } from './ProjectCard';

import styles from './styles.module.scss';

export const SectionProjects = () => {
  const { categorysProject } = useContext(AppBehaviorContext);
  const { projectsList: allProjectsList } = useContext(UserAdmContext);
  const filteredProjectsList = useFilterProjects();

  const projectsList =
    categorysProject === '' ? allProjectsList : filteredProjectsList;

  const independentProjects = useFilterSubCategory(projectsList, 'Independent');
  const studyProjects = useFilterSubCategory(projectsList, 'Study');

  return (
    <div className={styles.projectContainer}>
      <div className={styles.independentSection}>
        <h2 className="title2 gray">Independent Projects.</h2>
        <ul>
          {independentProjects?.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ul>
      </div>
      <div className={styles.studySection}>
        <h2 className="title2 gray">Study Projects</h2>
        <ul>
          {studyProjects?.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ul>
      </div>
    </div>
  );
};
