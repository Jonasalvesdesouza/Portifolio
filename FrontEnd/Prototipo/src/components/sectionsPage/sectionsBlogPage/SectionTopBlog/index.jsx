import { FormSearchArticles } from '../../../fragments/forms/index';
import styles from './styles.module.scss';

export const SectionTopBlog = () => {
  return (
    <div className={`${styles.headerBlog}`}>
      <h1 className="title1 black">Blog.</h1>
      <FormSearchArticles />
    </div>
  );
};
