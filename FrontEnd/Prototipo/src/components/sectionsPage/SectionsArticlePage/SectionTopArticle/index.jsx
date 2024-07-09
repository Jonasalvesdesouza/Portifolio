import { FormSearchArticles } from '../../../fragments/forms';
import styles from './styles.module.scss';

export const SectionTopArticle = () => {
  return (
    <div className={`${styles.topArticleContainer}`}>
      <div className={`${styles.headerArticle}`}>
        <h1 className="title1 white">Article.</h1>
        <FormSearchArticles />
      </div>
    </div>
  );
};
