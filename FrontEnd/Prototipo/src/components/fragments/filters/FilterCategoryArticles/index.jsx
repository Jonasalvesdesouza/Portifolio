import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../providers';
import {
  useCategoryArticlesData,
  useFilterArticleById,
} from '../../../../hooks';
import { CardFilter } from './CardFilter';
import styles from './styles.module.scss';

export const FilterCategoryArticles = ({ isSticky }) => {
  const { resetStadeCategorys, setSearch, focusedButton, setFocusedButton } =
    useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();
  const location = useLocation().pathname;
  const articleId = localStorage.getItem('@IDARTICLE');
  const article = useFilterArticleById(articleId);

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
    setFocusedButton('Emphasis');
    window.scrollTo({ top: 0 });
  };

  const testRouter = location === '/blog';
  const filterClass = `${isSticky ? styles.stickyContainer : testRouter ? styles.blogFilter : styles.filterContainer} ${isSticky && testRouter ? styles.stickyContainerWhite : ''}`;

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
            className={focusedButton === 'Emphasis' ? styles.focused : ''}
          >
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
