import { useContext, useState, useEffect } from 'react';

import { AppBehaviorContext } from '../../../../../providers';
import { useCategoryArticlesData } from '../../../../../hooks';
import { Button } from '../../../../fragments';

import { CardFilter } from './CardFilter';

import styles from './styles.module.scss';

export const FilterCategoryArticles = () => {
  const { resetStadeCategorys, setSearch, setCategorysArticles } =
    useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();
  const [focusedButton, setFocusedButton] = useState('Emphasis');

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
    setFocusedButton('Emphasis');
  };

  return (
    <div className={`${styles.filterContainer}`}>
      <ul>
        <li>
          <Button
            className={focusedButton === 'Emphasis' ? styles.focused : ''}
            onClick={handleClick}
          >
            Emphasis
          </Button>
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
