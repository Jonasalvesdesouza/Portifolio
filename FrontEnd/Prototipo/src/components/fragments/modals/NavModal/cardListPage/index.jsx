import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';

export const CardListPage = ({ page }) => {
  const { resetStadeCategorys } = useContext(AppBehaviorContext);

  const handleClick = () => {
    return resetStadeCategorys();
  };

  return (
    <li>
      <Link onClick={handleClick} to={page.router}>
        {page.name}
      </Link>
    </li>
  );
};
