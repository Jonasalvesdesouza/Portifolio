import { useContext, useEffect } from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormUpdateArticleImage } from '../../../forms';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const ImageUpdateArticleModal = ({ setIsopenUpdateImage, article }) => {
  const { imageArticle } = useContext(AppBehaviorContext);

  const closeModalOutClick = useOutclick(() => {
    setIsopenUpdateImage(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsopenUpdateImage(false);
  });

  const handleClick = () => {
    setIsopenUpdateImage(false);
  };

  useEffect(() => {
    if (setIsopenUpdateImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [setIsopenUpdateImage]);

  return (
    <div className={styles.modalBackdrop} role="dialog">
      <div ref={closeModalOutClick} className={styles.modalContainer}>
        <div className={styles.topModal}>
          <Button onClick={handleClick} className={styles.closeButton}>
            <IoCloseOutline />
          </Button>
          <h4>Update Image</h4>
        </div>
        <div className={styles.imgContainer}>
          <img src={imageArticle} alt="Preview" />
        </div>
        <div className={styles.formsModal}>
          <FormUpdateArticleImage
            setIsopenUpdateImage={setIsopenUpdateImage}
            article={article}
          />
        </div>
      </div>
    </div>
  );
};
