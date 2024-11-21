import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../providers';
import {
  useCategoryArticlesData,
  useFilterArticleById,
} from '../../../../hooks';
import { CardFilter } from './CardFilter';

import styles from './styles.module.scss';

export const FilterCategoryArticles = ({ isSticky, closeModal }) => {
  const {
    resetStadeCategorys,
    setSearch,
    focusedButton,
    setFocusedButton,
    screenWidth,
    isOpenNav,
    setIsOpenNav,
  } = useContext(AppBehaviorContext);

  const categorysData = useCategoryArticlesData();
  const location = useLocation().pathname;
  const articleId = localStorage.getItem('@IDARTICLE');
  const article = useFilterArticleById(articleId);

  const isResponsive = screenWidth <= 1024;

  const handleClick = () => {
    setIsOpenNav(false);
    resetStadeCategorys();
    setSearch('');
    setFocusedButton('Emphasis');
    window.scrollTo({ top: 0 });
    isOpenNav ? closeModal() : null;
  };

  const testRouter = location === '/blog';
  const filterClass = `${isSticky || isResponsive ? styles.stickyContainer : testRouter ? styles.blogFilter : styles.filterContainer} ${(isSticky && testRouter) || (isResponsive && testRouter) ? styles.stickyContainerWhite : ''}`;

  useEffect(() => {
    if (!testRouter && article && article.category) {
      setFocusedButton(article.category);
    }
  }, [article, setFocusedButton, testRouter]);

  return (
    <div className={filterClass}>
      <ul>
        <li>
          <Link
            to={'/blog'}
            onClick={handleClick}
            className={
              focusedButton === 'Emphasis' && testRouter
                ? styles.focusedBlog
                : focusedButton === 'Emphasis'
                  ? styles.focusedArticle
                  : null
            }
          >
            Emphasis
          </Link>
        </li>
        {categorysData?.map((category) => (
          <CardFilter
            className={
              focusedButton === category && testRouter
                ? styles.focusedBlog
                : focusedButton === category
                  ? styles.focusedArticle
                  : null
            }
            key={category}
            category={category}
            setFocusedButton={setFocusedButton}
            closeModal={closeModal}
          />
        ))}
      </ul>
    </div>
  );
};
