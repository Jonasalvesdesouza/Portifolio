import { useContext } from 'react';
import { useFilterSubCategory } from '../../../../../../hooks';
import { UserAdmContext } from '../../../../../../providers';
import { ProjectCard } from '../ProjectCard';

import styles from './styles.module.scss';

export const AllProjects = () => {
  const { projectsList } = useContext(UserAdmContext);

  const independentProjects = useFilterSubCategory(projectsList, 'Independent');
  const studyProjects = useFilterSubCategory(projectsList, 'Study');

  return (
    <div className={`${styles.allProjectsContainer}`}>
      <div>
        <h2 className="title2 gray">Independent Projects.</h2>
        <ul>
          {independentProjects?.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ul>
      </div>
      <div>
        <h2 className="title2 gray">Study Projects.</h2>
        <ul>
          {studyProjects?.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ul>
      </div>
    </div>
  );
};
