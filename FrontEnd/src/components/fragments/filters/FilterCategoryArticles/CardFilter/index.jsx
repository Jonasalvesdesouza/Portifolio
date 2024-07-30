import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBehaviorContext } from '../../../../../providers';

export const CardFilter = ({ category, className, setFocusedButton }) => {
  const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setCategorysArticles(category);
    setFocusedButton(category);
    setSearch('');
    window.scrollTo({ top: 0 });
  };

  return (
    <li>
      <Link to={'/blog'} className={className} onClick={handleClick}>
        {category}
      </Link>
    </li>
  );
};
