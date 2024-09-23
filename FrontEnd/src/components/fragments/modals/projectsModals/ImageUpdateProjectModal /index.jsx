import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick, useRenderImage } from '../../../../../hooks';

import { Button } from '../../../Button';
import { FormUpdateProjectImage } from '../../../forms';
import { useContext, useEffect, useState } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const ImageUpdateProjectModal = ({ setIsopenUpdateImage, project }) => {
  const { imageProject } = useContext(AppBehaviorContext);
  const [projectImage, setProjectImage] = useState('');

  const closeModalOutClick = useOutclick(() => {
    setIsopenUpdateImage(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsopenUpdateImage(false);
  });

  useEffect(() => {
    if (imageProject) {
      setProjectImage(imageProject);
    } else {
      const urlImage = useRenderImage(project);
      setProjectImage(urlImage);
    }
  }, [project, imageProject]);

  const handleClick = () => {
    setIsopenUpdateImage(false);
  };

  return (
    <div className={styles.modalBackdrop} role="dialog" >
      <div ref={closeModalOutClick} className={styles.modalContainer}>
        <div className={styles.topModal}>
          <Button onClick={handleClick} className={styles.closeButton}>
            <IoCloseOutline />
          </Button>
          <h4>Update imagem</h4>
        </div>
        <div className={styles.imgContainer}>
          <img src={projectImage}alt="Preview"/>
        </div>
        <div className={styles.formsModal}>
          <FormUpdateProjectImage setIsopenUpdateImage={setIsopenUpdateImage} />
        </div>
      </div>
    </div>
  );
};
