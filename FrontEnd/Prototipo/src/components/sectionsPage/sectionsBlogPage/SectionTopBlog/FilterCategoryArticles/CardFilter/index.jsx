import { useContext } from 'react';
import { Button } from '../../../../../fragments';
import { AppBehaviorContext } from '../../../../../../providers';

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
      <a className={className} onClick={handleClick}>
        {category}
      </a>
    </li>
  );
};
