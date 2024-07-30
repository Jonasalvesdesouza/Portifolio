import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { CardEducation } from './CardEducation';

import styles from './styles.module.scss';

export const SectionEducationCurriculum = () => {
  const { educationList } = useContext(UserAdmContext);

  return (
    <div className={`${styles.sectionEducationContainer}`}>
      <div className={`${styles.sectionEducationHeader}`}>
        <h4 className="title1 black">Education</h4>
      </div>
      <div>
        <ul>
          {educationList?.map((school) => {
            return <CardEducation key={school.id} school={school} />;
          })}
        </ul>
      </div>
    </div>
  );
};
