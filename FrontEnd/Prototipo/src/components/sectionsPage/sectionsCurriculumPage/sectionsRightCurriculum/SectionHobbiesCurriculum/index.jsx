import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { CardHobbiesCurriculum } from './CardHobbiesCurriculum';

import styles from './styles.module.scss';

export const SectionHobbiesCurriculum = () => {
  const { hobbyList } = useContext(UserAdmContext);

  const sortedhobbyList = hobbyList?.sort((a, b) => a.id - b.id);

  return (
    <div className={`${styles.sectionHobbiesContainer}`}>
      <div className={`${styles.hobbiesHeader}`}>
        <h4 className="title1 black">Hobbys</h4>
      </div>
      <ul>
        {sortedhobbyList?.map((hobbie) => {
          return <CardHobbiesCurriculum key={hobbie.id} hobbie={hobbie} />;
        })}
      </ul>
    </div>
  );
};
