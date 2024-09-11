import { DefaultTemplate } from '../../components/templade';
import {
  SectionArticles,
  SectionTopBlog,
} from '../../components/sectionsPage/sectionsBlogPage';
import { FilterCategoryArticles } from '../../components/fragments';
import { FormSearchArticles } from '../../components/fragments/forms';
import { useSticky } from '../../hooks';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../providers';

export const BlogPage = () => {
  const { screenWidth } = useContext(AppBehaviorContext);

  const [isSticky, filterRef] = useSticky();

  const isResponsive = screenWidth <= 1024;

  return (
    <>
      <DefaultTemplate
        isSticky={isSticky}
        topContent={
          isResponsive ? null : isSticky ? (
            <>
              <FilterCategoryArticles isSticky={isSticky} />
              <FormSearchArticles isSticky={isSticky} />
            </>
          ) : null
        }
      >
        <div className={styles.sectionArticleContainer}>
          <div className={styles.header}>
            <SectionTopBlog />
          </div>
          <div className={`${styles.filterContainer} `} ref={filterRef}>
            {isResponsive ? null : <FilterCategoryArticles />}
          </div>
          <div className={styles.sectionArticle}>
            <SectionArticles />
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
