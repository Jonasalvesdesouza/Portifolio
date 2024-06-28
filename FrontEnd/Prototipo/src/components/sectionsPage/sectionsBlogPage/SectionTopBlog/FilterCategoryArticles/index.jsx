import { useContext } from 'react';

import { AppBehaviorContext } from '../../../../../providers';
import { useCategoryArticlesData } from '../../../../../hooks';
import { Button } from '../../../../fragments';

import { CardFilter } from './CardFilter';

import styles from './styles.module.scss';

export const FilterCategoryArticles = () => {
  const { resetStadeCategorys, setSearch } = useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
  };

  return (
    <div className={`${styles.filterContainer}`}>
      <ul>
        <li>
          <Button onClick={handleClick}>Emphasis</Button>
        </li>
        {categorysData?.map((category) => {
          return <CardFilter key={category} category={category} />;
        })}
      </ul>
    </div>
  );
};
