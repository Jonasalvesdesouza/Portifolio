import { useContext, useState } from 'react';

import { AppBehaviorContext } from '../../../../../providers';
import { useCategoryArticlesData } from '../../../../../hooks';
import { Button } from '../../../../fragments';

import { CardFilter } from './CardFilter';

import styles from './styles.module.scss';

export const FilterCategoryArticles = () => {
  const { resetStadeCategorys, setSearch, focusedButton, setFocusedButton } =
    useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
    setFocusedButton('Emphasis');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={`${styles.filterContainer}`}>
      <ul>
        <li>
          <a
            className={focusedButton === 'Emphasis' ? styles.focused : ''}
            onClick={handleClick}
          >
            Emphasis
          </a>
        </li>
        {categorysData?.map((category) => {
          return (
            <CardFilter
              className={focusedButton === category ? styles.focused : ''}
              key={category}
              category={category}
              setFocusedButton={setFocusedButton}
            />
          );
        })}
      </ul>
    </div>
  );
};
