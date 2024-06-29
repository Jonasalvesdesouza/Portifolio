import { useContext } from 'react';
import { Button } from '../../../../../fragments';
import { AppBehaviorContext } from '../../../../../../providers';

export const CardFilter = ({ category, className, setFocusedButton }) => {
  const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setCategorysArticles(category);
    setFocusedButton(category);
    setSearch('');
  };

  return (
    <li>
      <Button className={className} onClick={handleClick}>
        {category}
      </Button>
    </li>
  );
};
