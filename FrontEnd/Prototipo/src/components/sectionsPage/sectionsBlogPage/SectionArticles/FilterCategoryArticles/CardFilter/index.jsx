import { useContext } from 'react';
import { Button } from '../../../../../fragments';
import { AppBehaviorContext } from '../../../../../../providers';

export const CardFilter = ({ category }) => {
  const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext);

  return (
    <li>
      <Button
        onClick={() => {
          setCategorysArticles(category);
          setSearch('');
        }}
      >
        {category}
      </Button>
    </li>
  );
};
