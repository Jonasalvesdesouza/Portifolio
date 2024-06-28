import { FormSearchArticles } from '../../../fragments/forms/index';
import { FilterCategoryArticles } from './FilterCategoryArticles';
import styles from './styles.module.scss';

export const SectionTopBlog = () => {
  return (
    <div>
      <div className={`${styles.headerBlog}`}>
        <h1 className="title1 black">Blog.</h1>
        <FormSearchArticles />
      </div>
      <div>
        <FilterCategoryArticles />
      </div>
    </div>
  );
};
