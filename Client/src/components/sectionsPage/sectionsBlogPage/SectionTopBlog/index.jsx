import { FormSearchArticles } from '../../../fragments/forms/';
import { useContext } from 'react';

import styles from './styles.module.scss';
import { AppBehaviorContext } from '../../../../providers';

export const SectionTopBlog = () => {
  const { screenWidth } = useContext(AppBehaviorContext);

  const isResponsive = screenWidth <= 1024;

  return (
    <div className={`${styles.topBlogContainer}`}>
      <div className={`${styles.headerBlog}`}>
        <h1 className="title1 black">Blog.</h1>
        {isResponsive ? null : <FormSearchArticles />}
      </div>
    </div>
  );
};
