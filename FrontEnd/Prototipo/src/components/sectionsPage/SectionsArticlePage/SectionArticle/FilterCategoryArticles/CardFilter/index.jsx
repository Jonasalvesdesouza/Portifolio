import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBehaviorContext } from '../../../../../../providers';

export const CardFilter = ({ category }) => {
  const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setCategorysArticles(category);
    setSearch('');
  };

  return (
    <li>
      <Link to={'/blog'} onClick={handleClick}>
        {category}
      </Link>
    </li>
  );
};
