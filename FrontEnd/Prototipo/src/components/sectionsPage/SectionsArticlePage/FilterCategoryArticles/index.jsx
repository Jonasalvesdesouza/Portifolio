import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppBehaviorContext } from '../../../../providers';
import {
  useCategoryArticlesData,
  useFilterArticleById,
} from '../../../../hooks';

import { CardFilter } from './CardFilter';

import styles from './styles.module.scss';

export const FilterCategoryArticles = () => {
  const { resetStadeCategorys, setSearch, focusedButton, setFocusedButton } =
    useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();

  const articleId = localStorage.getItem('@IDARTICLE');
  const article = useFilterArticleById(articleId);

  useEffect(() => {
    if (article && article.category) {
      setFocusedButton(article.category);
    }
  }, [article]);

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
    setFocusedButton('Emphasis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`${styles.filterContainer}`}>
      <ul>
        <li>
          <Link to={'/blog'} onClick={handleClick}>
            Emphasis
          </Link>
        </li>
        {categorysData?.map((category) => (
          <CardFilter
            className={focusedButton === category ? styles.focused : ''}
            key={category}
            category={category}
            setFocusedButton={setFocusedButton}
          />
        ))}
      </ul>
    </div>
  );
};
