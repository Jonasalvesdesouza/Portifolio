import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBehaviorContext } from '../../../../../../providers';

export const CardFilter = ({ category }) => {
  const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext);

  return (
    <li>
      <Link
        to={'/blog'}
        onClick={() => {
          setCategorysArticles(category);
          setSearch('');
        }}
      >
        {category}
      </Link>
    </li>
  );
};
