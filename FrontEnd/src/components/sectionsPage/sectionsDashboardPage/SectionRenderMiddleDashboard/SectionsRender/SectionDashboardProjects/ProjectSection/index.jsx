import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import styles from './styles.module.scss';
import { ProjectCard } from './ProjectCard';

export const ProjectSection = ({
  title,
  projects,
  refProp,
  showArrows,
  scrollContainer,
}) => {
  return (
    <div className={styles.projectSection}>
      <h2>{title}</h2>
      <div className={styles.listProjects}>
        {showArrows && (
          <>
            <span
              className={styles.left}
              onClick={() => scrollContainer(refProp, 'left')}
            >
              <IoIosArrowDropleftCircle className={styles.arrowIcon} />
            </span>
            <span
              className={styles.right}
              onClick={() => scrollContainer(refProp, 'right')}
            >
              <IoIosArrowDroprightCircle className={styles.arrowIcon} />
            </span>
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
};
