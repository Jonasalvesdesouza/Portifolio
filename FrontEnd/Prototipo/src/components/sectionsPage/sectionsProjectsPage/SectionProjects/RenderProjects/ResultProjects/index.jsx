import {
  useFilterProjects,
  useFilterSubCategory,
} from '../../../../../../hooks';
import { ProjectCard } from '../ProjectCard';
import styles from './styles.module.scss';

export const ResultProjects = () => {
  const projectsList = useFilterProjects();

  const independentProjects = useFilterSubCategory(projectsList, 'Independent');
  const studyProjects = useFilterSubCategory(projectsList, 'Study');

  return (
    <div className={`${styles.resultContainer}`}>
      <div>
        <h2 className="title2 gray">Independent Projects.</h2>
        <ul>
          {independentProjects?.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ul>
      </div>
      <div>
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
