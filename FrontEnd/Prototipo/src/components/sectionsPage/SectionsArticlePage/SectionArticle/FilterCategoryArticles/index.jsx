import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBehaviorContext } from '../../../../../providers';
import { useCategoryArticlesData } from '../../../../../hooks';

import { CardFilter } from './CardFilter';

export const FilterCategoryArticles = () => {
  const { resetStadeCategorys, setSearch } = useContext(AppBehaviorContext);
  const categorysData = useCategoryArticlesData();

  const handleClick = () => {
    resetStadeCategorys();
    setSearch('');
  };

  return (
    <div>
      <ul>
        <li>
          <Link to={'/blog'} onClick={handleClick}>
            All Articles
          </Link>
        </li>
        {categorysData?.map((category) => {
          return <CardFilter key={category} category={category} />;
        })}
      </ul>
    </div>
  );
};
