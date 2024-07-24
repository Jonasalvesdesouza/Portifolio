import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../providers';
import { IoHomeOutline } from 'react-icons/io5';
import { CiFilter } from 'react-icons/ci';
import {
  useCategoryArticlesData,
  useFilterArticleById,
} from '../../../../hooks';
import { CardFilter } from './CardFilter';
import styles from './styles.module.scss';
import { Button } from '../../Button';

export const FilterCategoryArticles = ({ isSticky }) => {
  const {
    resetStadeCategorys,
    setSearch,
    focusedButton,
    setFocusedButton,
    screenWidth,
  } = useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();
  const location = useLocation().pathname;
  const articleId = localStorage.getItem('@IDARTICLE');
  const article = useFilterArticleById(articleId);

  const isResponsive = screenWidth < 1024;

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
    setFocusedButton('Emphasis');
    window.scrollTo({ top: 0 });
  };

  const testRouter = location === '/blog';
  const filterClass = `${isSticky || isResponsive ? styles.stickyContainer : testRouter ? styles.blogFilter : styles.filterContainer} ${isSticky && testRouter ? styles.stickyContainerWhite : ''}`;

  useEffect(() => {
    if (!testRouter && article && article.category) {
      setFocusedButton(article.category);
    }
  }, [article, setFocusedButton, testRouter]);

  /*
  juntar o filter e a busca no header apartir de menos 1024px, usar referencia do 
  isStycy como referencia, colocar icon de seta para baixo junto com o do filter o
   mesmo vai ser ativado pelo hover 
  */

  return (
    <div className={filterClass}>
      <ul>
        {!isResponsive ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <Button>
                <CiFilter className={styles.icon} />
              </Button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
