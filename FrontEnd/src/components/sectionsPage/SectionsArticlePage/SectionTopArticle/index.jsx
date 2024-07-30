import { useContext } from 'react';
import { FormSearchArticles } from '../../../fragments/forms';
import styles from './styles.module.scss';
import { AppBehaviorContext } from '../../../../providers';

export const SectionTopArticle = () => {
  const { screenWidth } = useContext(AppBehaviorContext);

  const isResponsive = screenWidth > 1024;

  return (
    <div className={`${styles.topArticleContainer}`}>
      <div className={`${styles.headerArticle}`}>
        <h1 className="title1 white">Article.</h1>
        {!isResponsive ? null : <FormSearchArticles />}
      </div>
    </div>
  );
};
