import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormEditProject } from '../../../forms';

import styles from './styles.module.scss';

export const EditProjectModal = ({ setIsOpen }) => {
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
    <div className={styles.modalBackdrop} role="dialog">
      <div ref={closeModalOutClick} className={styles.modalContainer}>
        <Button className={styles.closeButton} onClick={handleClick}>
          <IoCloseOutline />
        </Button>
        <div className={styles.formsModal}>
          <FormEditProject setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};
