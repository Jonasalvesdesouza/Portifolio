import { useContext } from 'react';

import { AppBehaviorContext } from '../../../../../providers';
import { useCategoryArticlesData } from '../../../../../hooks';
import { Button } from '../../../../fragments';

import { CardFilter } from './CardFilter';

export const FilterCategoryArticles = () => {
  const { resetStadeCategorys, setSearch } = useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();

  return (
    <div>
      <ul>
        <li>
          <Button
            onClick={() => {
              resetStadeCategorys();
              setSearch('');
            }}
          >
            All Articles
          </Button>
        </li>
        {categorysData?.map((category) => {
          return <CardFilter key={category} category={category} />;
        })}
      </ul>
    </div>
  );
};
