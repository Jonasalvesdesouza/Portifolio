import { useContext } from 'react';

import { SlPhone } from 'react-icons/sl';
import { BsMailboxFlag } from 'react-icons/bs';

import { UserAdmContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const SectionContactCurriculum = () => {
  const { profile } = useContext(UserAdmContext);

  const cel = profile?.contact?.cel;
  const email = profile?.contact?.email;

  return (
    <div className={`${styles.sectionContactContainer}`}>
      <h3 className="title1 curriculum">Contact.</h3>
      <div className={`${styles.contacts}`}>
        <div>
          <SlPhone size={22} color="#76787b" />
          <p className="parapraphDefault curriculum">{cel}</p>
        </div>
        <div>
          <BsMailboxFlag size={22} color="#76787b" />
          <p className="parapraphDefault curriculum">{email}</p>
        </div>
      </div>
    </div>
  );
};
