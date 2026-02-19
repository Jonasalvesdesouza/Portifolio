import { useContext, useMemo } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { CardEducation } from './CardEducation';

import styles from './styles.module.scss';

export const SectionEducationCurriculum = () => {
  const { educationList } = useContext(UserAdmContext);

  const sortedEducationList = useMemo(() => {
    if (!educationList) return [];

    return [...educationList].sort(
      (a, b) =>
        new Date(b.startDate).getTime() -
        new Date(a.startDate).getTime()
    );
  }, [educationList]);

  return (
    <div className={styles.sectionEducationContainer}>
      <div className={styles.sectionEducationHeader}>
        <h4 className="title1 black">Education</h4>
      </div>
      <div>
        <ul>
          {sortedEducationList.map((school) => (
            <CardEducation key={school.id} school={school} />
          ))}
        </ul>
      </div>
    </div>
  );
};
