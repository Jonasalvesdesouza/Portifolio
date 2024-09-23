import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormInsertSocialMedia } from '../../../forms';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

export const InsertSocialMediaModal = ({ setIsOpenDashboard }) => {
  const { setFocusBtnAdd } = useContext(AppBehaviorContext);

  const closeModalOutClick = useOutclick(() => {
    setFocusBtnAdd('');
    setIsOpenDashboard(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setFocusBtnAdd('');
    setIsOpenDashboard(false);
  });

  const handleClick = () => {
    setFocusBtnAdd('');
    setIsOpenDashboard(false);
  };

  return (
    <div role="dialog" ref={closeModalOutClick}>
      <div>
        <Button onClick={handleClick}>
          <IoCloseOutline size={28} color="#1b1f24" />
        </Button>
      </div>
      <div>
        {<FormInsertSocialMedia setIsOpenDashboard={setIsOpenDashboard} />}
      </div>
    </div>
  );
};
