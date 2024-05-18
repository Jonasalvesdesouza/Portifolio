import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick } from '../../../../../hooks';
import { Button } from '../../../Button';
import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';

export const ViewMessageModal = ({ setIsOpen }) => {
  const { viewMessage } = useContext(UserAdmContext);

  const closeModalOutClick = useOutclick(() => {
    setIsOpen(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpen(false);
  });

  const handleClick = () => {
    return setIsOpen(false);
  };

  return (
    <div role="dialog" ref={closeModalOutClick}>
      <div>
        <Button onClick={handleClick}>
          <IoCloseOutline size={28} color="#1b1f24" />
        </Button>
      </div>
      <div>
        <div>
          <p>Name:</p>
          <h3>{viewMessage.name}</h3>
        </div>
        <div>
          <p>Email:</p>
          <p>{viewMessage.email}</p>
        </div>
        <div>
          <p>Message:</p>
          <p>{viewMessage.description}</p>
        </div>
      </div>
    </div>
  );
};
