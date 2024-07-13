import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../providers';
import { HamburgerButton } from '../../HamburguerButton';

import styles from './styles.module.scss';
import YellowLogo from '../../../../assets/YellowLogo.svg';
import BlackLogo from '../../../../assets/BlackLogo.svg';

export const Header = ({ setIsOpen, children, headerClass, isSticky }) => {
  const {
    location,
    setRouteLocation,
    setCurrentCard,
    setReturShapeHam,
    setFocusedButton,
  } = useContext(AppBehaviorContext);

  const compareRoutes = location === '/projects' || location === '/blog';
  const useBlackLogo =
    compareRoutes ||
    headerClass === 'headerSection2' ||
    headerClass === 'headerSection4';

  const handleClick = () => {
    setIsOpen(true);
    setRouteLocation(location);
    setReturShapeHam(true);
    setFocusedButton('Emphasis');
  };

  const handleClickLogo = () => {
    setReturShapeHam(false);
    setCurrentCard(0);
  };

  const logo = useBlackLogo ? BlackLogo : YellowLogo;
  const logoAlt = useBlackLogo ? 'Black Logo' : 'Yellow Logo';

  return (
    <header className={`${isSticky ? styles.sticky : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link to={'/'} onClick={handleClickLogo}>
            <img src={logo} alt={logoAlt} />
          </Link>
        </div>
        {isSticky && <div className={styles.nav}>{children}</div>}
        <div className={styles.HamburgerButton}>
          <HamburgerButton
            headerClass={headerClass}
            handleClick={handleClick}
          />
        </div>
      </div>
      {!isSticky && children}
    </header>
  );
};
