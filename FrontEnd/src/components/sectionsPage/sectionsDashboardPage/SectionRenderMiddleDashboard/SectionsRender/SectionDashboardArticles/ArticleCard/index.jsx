import { useContext, useState } from 'react';

import {
  EditArticleModal,
  InserirImagemArticleModal,
  ImageUpdateArticleModal,
} from '../../../../../../fragments';

import {
  useCalculateReadingTime,
  useFormtDate,
  useLimitedDescription,
  useArticleImage,
} from '../../../../../../../hooks';

import {
  AppBehaviorContext,
  UserAdmContext,
} from '../../../../../../../providers';

import { ImageButtons } from './ImageButtons';
import { ButtonsArticleCard } from './ButtonsArticleCard';

import styles from './styles.module.scss';

export const ArticleCard = ({ article }) => {
  const { setImageArticle } = useContext(AppBehaviorContext);
  const { setEditArticles, articleDelete, setArticle } =
    useContext(UserAdmContext);

  const dateArticle = useFormtDate(article.updatedAt);
  const maxLength = 250;
  const LimitedDescription = useLimitedDescription(
    article.description,
    maxLength,
  );
  const timeText = useCalculateReadingTime(article.description);

  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const articleImage = useArticleImage(article);

  return (
    <>
      <li className={styles.articleCardContainer}>
        <div className={styles.cardLeft}>
          <div className={styles.headerCard}>
            <h2>{article.title}</h2>
            <span>{dateArticle}</span>
          </div>

          <div className={`${styles.descriptionContainer} ql-snow`}>
            <p
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: LimitedDescription }}
            />
          </div>

          <div className={styles.cardFooter}>
            <div>
              <span className={`${styles.cardCategory}`}>
                {article.category} -{' '}
              </span>
              <span className={styles.readingTime}>
                {'Reading time ' + timeText + ' minute'}
              </span>
            </div>

            <div className={styles.buttonsContainer}>
              <ButtonsArticleCard
                article={article}
                setIsOpen={() => openModal('edit')}
                setEditArticles={setEditArticles}
                articleDelete={articleDelete}
                loading={loading}
                setLoading={setLoading}
              />

              <ImageButtons
                article={article}
                setIsOpenInsertImage={() => openModal('insertImage')}
                setIsopenUpdateImage={() => openModal('updateImage')}
                setArticle={setArticle}
                articleImage={articleImage}
                setImageArticle={setImageArticle}
              />
            </div>
          </div>
        </div>
        <div className={styles.cardRight}>
          <img src={articleImage} alt={`${article.title}`} />
        </div>
      </li>
      {modalType === 'edit' && <EditArticleModal setIsOpen={closeModal} />}
      {modalType === 'insertImage' && (
        <InserirImagemArticleModal
          setIsOpenInsertImage={closeModal}
          article={article}
        />
      )}
      {modalType === 'updateImage' && (
        <ImageUpdateArticleModal
          article={article}
          setIsopenUpdateImage={closeModal}
        />
      )}
    </>
  );
};
