import { SlArrowRight } from 'react-icons/sl';
import {
  useLinkProject,
  useRenderImage,
  useLimitedDescription,
} from '../../../../../hooks';

import styles from './styles.module.scss';
import { useState } from 'react';

export const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const urlImage = useRenderImage(project);

  const maxLength = 120;
  const LimitedDescription = useLimitedDescription(
    project.description,
    maxLength,
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <li>
      <div className={`${styles.cardContainer}`}>
        <a href={`${useLinkProject(project)}`} className={`${styles.header}`}>
          <img
            src={urlImage}
            alt={`${project.title}`}
            className={isHovered ? styles.animate : null}
          />
        </a>
        <div className={`${styles.middle}`}>
          <div className={`${styles.presentationContainer}`}>
            <a href={`${useLinkProject(project)}`}>
              <h3
                className="title3 gray"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >{`${project.title}`}</h3>
            </a>
            <p className="parapraphDefault">{`${LimitedDescription}`}</p>
          </div>
          <div
            className={`${styles.bntView}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={`${useLinkProject(project)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.bntContent}>
                view
                <SlArrowRight className={styles.icon} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
