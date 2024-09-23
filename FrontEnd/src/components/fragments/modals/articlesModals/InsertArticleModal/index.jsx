import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormInsertArticle } from '../../../forms';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const InsertArticleModal = ({ setIsOpenDashboard }) => {
  const { setFocusBtnAdd } = useContext(AppBehaviorContext);

  const closeModalOutClick = useOutclick(() => {
    setFocusBtnAdd('');
    setIsOpenDashboard(false);
    setFocusBtnAdd(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpenDashboard(false);
    setFocusBtnAdd(false);
  });

  const handleClick = () => {
    setIsOpenDashboard(false);
    setFocusBtnAdd(false);
  };

  return (
    <div className={styles.modalBackdrop} role="dialog">
      <div ref={closeModalOutClick} className={styles.modalContainer}>
        <Button onClick={handleClick} className={styles.closeButton}>
          <IoCloseOutline />
        </Button>
        <div className={styles.formsModal}>
          <FormInsertArticle setIsOpenDashboard={setIsOpenDashboard} />
        </div>
      </div>
    </div>
  );
};
