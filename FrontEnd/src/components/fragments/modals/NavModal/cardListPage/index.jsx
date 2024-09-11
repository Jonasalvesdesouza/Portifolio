import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import styles from './styles.module.scss';

export const CardListPage = ({ page, setIsOpen }) => {
  const {
    resetStadeCategorys,
    setReturShapeHam,
    setSearch,
    setCurrentCard,
    routeLocation,
  } = useContext(AppBehaviorContext);

  const router = routeLocation === '/articlepage' || routeLocation === '/';

  const styleFontColor = router
    ? { color: 'var(--color-white)' }
    : { color: 'var(--color-gray1)' };

  const customLinkClass = `${styles.customLink} ${router ? styles.customLinkWhite : styles.customLinkGray}`;

  const handleClick = () => {
    setReturShapeHam(false);
    resetStadeCategorys('');
    window.scrollTo({ top: 0 });
    setSearch('');
    setCurrentCard(0);
    setIsOpen(false);
  };

  return (
    <li>
      <Link
        className={customLinkClass}
        style={styleFontColor}
        onClick={handleClick}
        to={page.router}
      >
        {page.name}
      </Link>
    </li>
  );
};
