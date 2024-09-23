import { useContext, useEffect, useState } from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick, useRenderImage } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormArticleInsertImage } from '../../../forms';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const InserirImagemArticleModal = ({
  article,
  setIsOpenInsertImage,
}) => {
  const { imageArticle } = useContext(AppBehaviorContext);
  const [articleImage, setArticleImage] = useState('');

  const closeModalOutClick = useOutclick(() => {
    setIsOpenInsertImage(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpenInsertImage(false);
  });

  const handleClick = () => {
    setIsOpenInsertImage(false);
    setArticleImage('');
  };

  useEffect(() => {
    if (imageArticle) {
      setArticleImage(imageArticle);
    } else {
      const urlImage = useRenderImage(article);
      setArticleImage(urlImage);
    }
  }, [article, imageArticle]);

  useEffect(() => {
    if (setIsOpenInsertImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [setIsOpenInsertImage]);

  return (
    <div className={styles.modalBackdrop} role="dialog">
      <div ref={closeModalOutClick} className={styles.modalContainer}>
        <div className={styles.topModal}>
          <Button onClick={handleClick} className={styles.closeButton}>
            <IoCloseOutline />
          </Button>
          <h4>Insert imagem</h4>
        </div>
        <div className={styles.imgContainer}>
          <img src={articleImage} alt="Preview" />
        </div>
        <div className={styles.formsModal}>
          <FormArticleInsertImage setIsOpenInsertImage={setIsOpenInsertImage} />
        </div>
      </div>
    </div>
  );
};
