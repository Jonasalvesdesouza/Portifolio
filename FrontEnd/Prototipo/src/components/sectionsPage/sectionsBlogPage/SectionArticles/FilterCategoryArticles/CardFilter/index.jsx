import { useContext } from 'react';
import { Button } from '../../../../../fragments';
import { AppBehaviorContext } from '../../../../../../providers';

export const CardFilter = ({ category }) => {
  const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setCategorysArticles(category);
    setSearch('');
  };

  return (
    <li>
      <Button onClick={handleClick}>{category}</Button>
    </li>
  );
};
