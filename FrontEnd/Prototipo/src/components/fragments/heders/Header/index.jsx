import YellowLogo from '../../../../assets/YellowLogo.svg';
import BlackLogo from '../../../../assets/BlackLogo.svg';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../providers';
import styles from './styles.module.scss';
import { HamburgerButton } from '../../HamburguerButton';

export const Header = ({ setIsOpen }) => {
  const { location, setRouteLocation, setCurrentCard, setReturShapeHam } =
    useContext(AppBehaviorContext);

  const compareRoutes = location === '/projects' || location === '/blog';

  const handleClick = () => {
    setIsOpen(true);
    setRouteLocation(location);
    setReturShapeHam(true);
  };

  const handleClickLogo = () => {
    setReturShapeHam(false);
    setCurrentCard(0);
  };

  return (
    <header>
      <div className={`${styles.headerContainer} container`}>
        <div>
          {compareRoutes ? (
            <Link to={'/'} onClick={handleClickLogo}>
              <img
                className={`${styles.logo}`}
                src={BlackLogo}
                alt="Black Logo"
              />
            </Link>
          ) : (
            <Link to={'/'} onClick={handleClickLogo}>
              <img
                className={`${styles.logo}`}
                src={YellowLogo}
                alt="Yellow Logo"
              />
            </Link>
          )}
        </div>
        <HamburgerButton handleClick={handleClick} />
      </div>
    </header>
  );
};
