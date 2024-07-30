import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../providers';
import { CiFilter } from 'react-icons/ci';
import {
  useCategoryArticlesData,
  useFilterArticleById,
} from '../../../../hooks';
import { CardFilter } from './CardFilter';
import { Button } from '../../Button';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import styles from './styles.module.scss';

<IoIosArrowDown className="arrowIcon" />;

export const FilterCategoryArticles = ({ isSticky }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const isResponsive = screenWidth <= 1024;

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
    setFocusedButton('Emphasis');
    window.scrollTo({ top: 0 });
  };

  const handleFilterToggle = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  const testRouter = location === '/blog';
  const filterClass = `${isSticky || isResponsive ? styles.stickyContainer : testRouter ? styles.blogFilter : styles.filterContainer} ${isSticky && testRouter ? styles.stickyContainerWhite : ''}`;

  useEffect(() => {
    if (!testRouter && article && article.category) {
      setFocusedButton(article.category);
    }
  }, [article, setFocusedButton, testRouter]);

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
              <Button onClick={handleFilterToggle}>
                <CiFilter className={styles.icon} />
                <div>
                  {!isFilterOpen ? (
                    <IoIosArrowDown className={styles.arrow} />
                  ) : (
                    <IoIosArrowUp className={styles.arrow} />
                  )}
                  ;
                </div>
              </Button>
            </li>
          </>
        )}
      </ul>
      {isFilterOpen && (
        <div className={styles.filter}>
          {categorysData?.map((category) => (
            <CardFilter
              className={focusedButton === category ? styles.focused : ''}
              key={category}
              category={category}
              setFocusedButton={setFocusedButton}
            />
          ))}
        </div>
      )}
    </div>
  );
};
