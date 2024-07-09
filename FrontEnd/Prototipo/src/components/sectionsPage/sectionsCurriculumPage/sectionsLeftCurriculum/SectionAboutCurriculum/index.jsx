import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const SectionAboutCurriculum = () => {
  const { profile } = useContext(UserAdmContext);

  return (
    <div className={`${styles.aboutContainer}`}>
      <h2 className="title1 curriculum">About.</h2>
      <p className="parapraphDefault curriculum">{profile?.about}</p>
    </div>
  );
};
