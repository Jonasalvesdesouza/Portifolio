import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';
import {
  SectionArticles,
  SectionTopBlog,
} from '../../components/sectionsPage/sectionsBlogPage';
import { NavModal, FilterCategoryArticles } from '../../components/fragments';
import { FormSearchArticles } from '../../components/fragments/forms';
import { useSticky } from '../../hooks';

import styles from './styles.module.scss';

export const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <SectionTopBlog />
          </div>
          <div className={`${styles.filterContainer}`} ref={filterRef}>
            <FilterCategoryArticles />
          </div>
          <div className={styles.sectionArticle}>
            <SectionArticles />
          </div>
        </div>
      </DefaultTemplate>
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
