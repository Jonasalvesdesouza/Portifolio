import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';

import {
  SectionArticle,
  SectionTopArticle,
} from '../../components/sectionsPage/SectionsArticlePage';

import { FormSearchArticles } from '../../components/fragments/forms';
import { NavModal, FilterCategoryArticles } from '../../components/fragments';

import { useSticky } from '../../hooks';

import styles from './styles.module.scss';

export const ArticlePage = () => {
  const [isOpen, setIsOpen] = useState();

  const [isSticky, filterRef] = useSticky();

  return (
    <>
      <DefaultTemplate
        setIsOpen={setIsOpen}
        isSticky={isSticky}
        topContent={
          isSticky ? (
            <>
              <FilterCategoryArticles isSticky={isSticky} />
              <FormSearchArticles isSticky={isSticky} />
            </>
          ) : null
        }
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
