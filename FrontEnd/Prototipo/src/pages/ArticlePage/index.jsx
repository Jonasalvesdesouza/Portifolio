import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';

import {
  SectionArticle,
  SectionTopArticle,
  FilterCategoryArticles,
} from '../../components/sectionsPage/SectionsArticlePage';

import { NavModal } from '../../components/fragments';

import styles from './styles.module.scss';

export const ArticlePage = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <DefaultTemplate setIsOpen={setIsOpen} topContent={<SectionTopArticle />}>
        <div className={styles.sectionArticleContainer}>
          <div className={`${styles.filterContainer}`}>
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
