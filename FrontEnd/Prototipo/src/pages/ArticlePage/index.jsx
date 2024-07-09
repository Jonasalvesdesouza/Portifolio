import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';

import {
  SectionArticle,
  SectionTopArticle,
  FilterCategoryArticles,
} from '../../components/sectionsPage/SectionsArticlePage';

import { NavModal } from '../../components/fragments';

import styles from './styles.module.scss';
import { useSticky } from '../../hooks';
import { FormSearchArticles } from '../../components/fragments/forms';

export const ArticlePage = () => {
  const [isOpen, setIsOpen] = useState();

  const [isSticky, filterRef] = useSticky();

  return (
    <>
      <DefaultTemplate
        setIsOpen={setIsOpen}
        topContent={
          isSticky ? (
            <>
              <FilterCategoryArticles />
              <FormSearchArticles />
            </>
          ) : null
        }
        isSticky={isSticky}
      >
        <div className={styles.sectionArticleContainer}>
          <div className={styles.header}>
            <SectionTopArticle />
          </div>
          <div className={`${styles.filterContainer}`} ref={filterRef}>
            <FilterCategoryArticles />
          </div>
          <div className={styles.sectionArticle}>
            <SectionArticle />
          </div>
        </div>
      </DefaultTemplate>
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
