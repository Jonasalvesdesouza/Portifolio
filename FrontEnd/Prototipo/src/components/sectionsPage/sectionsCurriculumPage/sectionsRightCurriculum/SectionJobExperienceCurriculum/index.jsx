import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { CardJobExperience } from './CardJobExperience';

import styles from './styles.module.scss';

export const SectionJobExperienceCurriculum = () => {
  const { jobExperienceList } = useContext(UserAdmContext);

  const sortedJobExperienceList = jobExperienceList?.sort(
    (a, b) => a.id - b.id,
  );

  return (
    <div className={`${styles.sectionJobExperienceContainer}`}>
      <div className={`${styles.jobExperienceHeader}`}>
        <h4 className="title1 black">Job Experience</h4>
      </div>
      <div>
        <ul>
          {sortedJobExperienceList?.map((job) => {
            return <CardJobExperience key={job.id} job={job} />;
          })}
        </ul>
      </div>
    </div>
  );
};
