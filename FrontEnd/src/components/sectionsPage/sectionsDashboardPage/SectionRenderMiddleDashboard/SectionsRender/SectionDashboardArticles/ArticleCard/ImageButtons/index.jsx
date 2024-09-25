import { FaImage } from 'react-icons/fa6';
import { BiSolidImageAdd } from 'react-icons/bi';

import { Button } from '../../../../../../../fragments';

import styles from './styles.module.scss';

export const ImageButtons = ({
  article,
  setIsOpenInsertImage,
  setIsopenUpdateImage,
  setArticle,
  articleImage,
  setImageArticle,
}) => {
  const handleInsertImage = () => {
    setIsOpenInsertImage(true);
    setArticle(article);
    setImageArticle(null);
  };

  const handleUpdateImage = () => {
    setIsopenUpdateImage(true);
    setArticle(article);
    setImageArticle(articleImage);
  };

  return (
    <div className={styles.insertImageContainer}>
      <div>
        <Button
          className={styles.btnImg}
          onClick={
            articleImage != '/src/assets/DefaultImage.ai.svg'
              ? handleUpdateImage
              : articleImage === '/src/assets/DefaultImage.ai.svg'
                ? handleInsertImage
                : null
          }
        >
          {articleImage != '/src/assets/DefaultImage.ai.svg' ? (
            <FaImage />
          ) : (
            <BiSolidImageAdd />
          )}
        </Button>
      </div>
    </div>
  );
};
