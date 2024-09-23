import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick, useRenderImage } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormProjectImage } from '../../../forms';
import { useContext, useEffect, useState } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const ImageProjectModal = ({ project, setIsOpenInsertImage }) => {
  const { imageProject } = useContext(AppBehaviorContext);
  const [projectImage, setProjectImage] = useState('');

  const closeModalOutClick = useOutclick(() => {
    setIsOpenInsertImage(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpenInsertImage(false);
  });

  const handleClick = () => {
    setIsOpenInsertImage(false);
    setProjectImage('');
  };

  useEffect(() => {
    if (imageProject) {
      setProjectImage(imageProject);
    } else {
      const urlImage = useRenderImage(project);
      setProjectImage(urlImage);
    }
  }, [project, imageProject]);

  return (
    <div className={styles.modalBackdrop} role="dialog" >
      <div ref={closeModalOutClick} className={styles.modalContainer}>
        <div className={styles.topModal}>
          <Button onClick={handleClick} className={styles.closeButton}>
            <IoCloseOutline />
          </Button>
          <h4>Insert imagem</h4>
        </div>
        <div className={styles.imgContainer}>
          <img src={projectImage} alt="Preview"/>
        </div>
        <div className={styles.formsModal}>
          <FormProjectImage setIsOpenInsertImage={setIsOpenInsertImage} />
        </div>
      </div>
    </div>
  );
};
