import { useContext } from 'react';

import { SlPhone } from 'react-icons/sl';
import { BsMailboxFlag } from 'react-icons/bs';

import { UserAdmContext } from '../../../../../providers';

export const SectionContactCurriculum = () => {
  const { profile } = useContext(UserAdmContext);

  const cel = profile.contact?.cel;
  const email = profile.contact?.email;

  return (
    <div>
      <h3>Contact.</h3>
      <div>
        <SlPhone size={20} color="#848484" />
        <p>{cel}</p>
      </div>
      <div>
        <BsMailboxFlag size={20} color="#848484" />
        <p>{email}</p>
      </div>
    </div>
  );
};
