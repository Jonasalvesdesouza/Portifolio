import { BiSolidImageAdd } from 'react-icons/bi';
import { FaImage } from 'react-icons/fa6';

import { Button } from '../../../../../../../../fragments';

import styles from './styles.module.scss';

export const InsertImage = ({
  project,
  setIsopenUpdateImage,
  setIsOpenInsertImage,
  setProject,
  projectImage,
  setImageProject,
}) => {
  const handleInsertImage = () => {
    setIsOpenInsertImage(true);
    setImageProject(null);
    setProject(project);
  };

  const handleUpdateImage = () => {
    setIsopenUpdateImage(true);
    setProject(project);
    setImageProject(projectImage);
  };

  return (
    <div className={styles.insertImageContainer}>
      <Button
        onClick={
          projectImage != '/src/assets/DefaultImage.ai.svg'
            ? handleUpdateImage
            : projectImage === '/src/assets/DefaultImage.ai.svg'
              ? handleInsertImage
              : null
        }
      >
        {projectImage != '/src/assets/DefaultImage.ai.svg' ? (
          <FaImage />
        ) : (
          <BiSolidImageAdd />
        )}
      </Button>
    </div>
  );
};
