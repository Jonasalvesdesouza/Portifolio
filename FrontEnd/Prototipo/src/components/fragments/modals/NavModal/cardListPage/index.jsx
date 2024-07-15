import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import styles from './styles.module.scss';

export const CardListPage = ({ page }) => {
  const { resetStadeCategorys, setReturShapeHam, setSearch, setCurrentCard } =
    useContext(AppBehaviorContext);

  const handleClick = () => {
    setReturShapeHam(false);
    resetStadeCategorys('');
    window.scrollTo({ top: 0 });
    setSearch('');
    setCurrentCard(0);
  };

  return (
    <li>
      <Link
        className={`${styles.customLink}`}
        onClick={handleClick}
        to={page.router}
      >
        {page.name}
      </Link>
    </li>
  );
};
