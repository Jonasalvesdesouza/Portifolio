import { SlArrowRight } from 'react-icons/sl';
import {
  useLinkProject,
  useRenderImage,
  useLimitedDescription,
} from '../../../../../../../hooks';

import styles from './styles.module.scss';

export const ProjectCard = ({ project }) => {
  const urlImage = useRenderImage(project);

  const maxLength = 120;
  const LimitedDescription = useLimitedDescription(
    project.description,
    maxLength,
  );

  return (
    <li>
      <div className={`${styles.cardContainer}`}>
        <div className={`${styles.header}`}>
          <img src={urlImage} alt={`${project.title}`} />
        </div>

        <div className={`${styles.middle}`}>
          <div className={`${styles.presentationContainer}`}>
            <h3 className="title3 gray">{`${project.title}`}</h3>
            <p className="parapraphDefault">{`${LimitedDescription}`}</p>
          </div>
          <div className={`${styles.bntView}`}>
            <a
              href={`${useLinkProject(project)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.bntContent}>
                View
                <SlArrowRight seize={20} color="#76787b" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
