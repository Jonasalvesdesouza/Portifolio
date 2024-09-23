import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormInsertEducation } from '../../../forms';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

export const InsertEducationModal = ({ setIsOpenDashboard }) => {
  const { setFocusBtnAdd } = useContext(AppBehaviorContext);

  const closeModalOutClick = useOutclick(() => {
    setFocusBtnAdd(false);
    setIsOpenDashboard(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setFocusBtnAdd(false);
    setIsOpenDashboard(false);
  });

  const handleClick = () => {
    setFocusBtnAdd(false);
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
        {<FormInsertEducation setIsOpenDashboard={setIsOpenDashboard} />}
      </div>
    </div>
  );
};
