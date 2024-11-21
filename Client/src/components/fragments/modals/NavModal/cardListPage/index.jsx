import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../../providers';
import styles from './styles.module.scss';

export const CardListPage = ({ page, setIsOpen, closeModal }) => {
  const {
    resetStadeCategorys,
    setReturShapeHam,
    setSearch,
    setCurrentCard,
    routeLocation,
    isOpenNav,
  } = useContext(AppBehaviorContext);

  const router =
    routeLocation === '/articlepage' ||
    routeLocation === '/' ||
    routeLocation === '/curriculum';

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
    isOpenNav ? closeModal() : null;
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
