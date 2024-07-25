import { DefaultTemplate } from '../../components/templade';

import {
  SectionArticle,
  SectionTopArticle,
} from '../../components/sectionsPage/SectionsArticlePage';

import { FormSearchArticles } from '../../components/fragments/forms';
import { FilterCategoryArticles } from '../../components/fragments';

import { useSticky, useScreenWidth } from '../../hooks';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../providers';

export const ArticlePage = () => {
  const { screenWidth } = useContext(AppBehaviorContext);
  const [isSticky, filterRef] = useSticky();

  useScreenWidth();

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
            <div>
              <SectionTopArticle />
            </div>
            <div className={`${styles.filterContainer}`} ref={filterRef}>
              {isResponsive ? <></> : <FilterCategoryArticles />}
            </div>
          </div>
          <div className={styles.sectionArticle}>
            <SectionArticle />
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
