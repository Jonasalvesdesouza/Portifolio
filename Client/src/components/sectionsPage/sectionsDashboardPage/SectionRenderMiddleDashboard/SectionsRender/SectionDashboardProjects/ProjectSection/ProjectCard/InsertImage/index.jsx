import { BiSolidImageAdd } from 'react-icons/bi';
import { FaImage } from 'react-icons/fa6';

import { Button } from '../../../../../../../../fragments';

import styles from './styles.module.scss';

export const InsertImage = ({
  project,
  setIsopenUpdateImage,
  setIsOpenInsertImage,
  setProject,

}) => {
  const handleInsertImage = () => {
    setIsOpenInsertImage(true);
    setProject(project);
  };

  const handleUpdateImage = () => {
    setIsopenUpdateImage(true);
    setProject(project);
  };

  return (
    <div className={styles.insertImageContainer}>
      <Button
        onClick={
          project.image != null
            ? handleUpdateImage
            : project.image === null
              ? handleInsertImage
              : null
        }
      >
        {project.image != null ? (
          <FaImage />
        ) : (
          <BiSolidImageAdd />
        )}
      </Button>
    </div>
  );
};
