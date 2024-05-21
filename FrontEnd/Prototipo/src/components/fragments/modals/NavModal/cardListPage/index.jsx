import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';

export const CardListPage = ({ page }) => {
  const { resetStadeCategorys, setReturShapeHam } =
    useContext(AppBehaviorContext);

  const handleClick = () => {
    setReturShapeHam(false);
    resetStadeCategorys('');
  };

  return (
    <li>
      <Link onClick={handleClick} to={page.router}>
        {page.name}
      </Link>
    </li>
  );
};
