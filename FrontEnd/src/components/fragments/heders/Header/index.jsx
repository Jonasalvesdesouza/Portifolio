import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../providers';
import { HamburgerButton } from '../../HamburguerButton';
import { NavModal } from '../../modals/NavModal';
import { useIgnoreElements } from '../../../../hooks';

import styles from './styles.module.scss';
import YellowLogo from '../../../../assets/YellowLogo.svg';
import BlackLogo from '../../../../assets/BlackLogo.svg';

export const Header = ({ children, headerClass, isSticky }) => {
  const [isClosing, setIsClosing] = useState(false);

  const {
    location,
    setRouteLocation,
    setCurrentCard,
    setReturShapeHam,
    isOpenNav,
    setIsOpenNav,
  } = useContext(AppBehaviorContext);

  const testRouterIsBlogOrProjects =
    location === '/blog' || location === '/projects';

  const useBlackLogo =
    testRouterIsBlogOrProjects ||
    headerClass === 'headerSection2' ||
    headerClass === 'headerSection4';

  const logo = useBlackLogo ? BlackLogo : YellowLogo;
  const logoAlt = useBlackLogo ? 'Black Logo' : 'Yellow Logo';

  const classHamburguer = isOpenNav ? 'headerSection2' : headerClass;
  const headerClassName = `${isSticky ? styles.sticky : ''} ${isSticky && testRouterIsBlogOrProjects ? styles['stickyWhite'] : ''} ${isSticky ? 'slide-in-top' : ''}`;
  const classContainer = `${styles.headerContainer} ${isSticky ? styles.stickyContainer : ''}`;

  const navModalRef = useRef(null);
  const headerRef = useRef(null);

  useIgnoreElements(() => {
    closeNav();
  }, [navModalRef, headerRef]);

  const closeNav = () => {
    setIsClosing(true);
    setReturShapeHam(false);
    setTimeout(() => {
      setIsOpenNav(false);
      setIsClosing(false);
    }, 500);
  };

  const openNav = () => {
    setRouteLocation(location);
    setReturShapeHam(true);
    setIsOpenNav(true);
  };

  const handleClickLogo = () => {
    setReturShapeHam(false);
    setCurrentCard(0);
  };

  const handleClick = () => {
    if (isOpenNav) {
      closeNav();
    } else {
      openNav();
    }
  };

  return (
    <header className={headerClassName}>
      <div className={classContainer}>
        <div className={styles.logo}>
          <Link to="/" onClick={handleClickLogo}>
            <img src={logo} alt={logoAlt} />
          </Link>
        </div>
        {isSticky && <div className={styles.filter}>{children}</div>}
        <div className={styles.hamburger}>
          <HamburgerButton
            ref={headerRef}
            handleClick={handleClick}
            headerClass={classHamburguer}
            isOpenNav={isOpenNav}
          />
        </div>
        {isOpenNav && (
          <NavModal
            ref={navModalRef}
            closeModal={handleClick}
            isClosing={isClosing}
            closeNav={closeNav}
          />
        )}
      </div>
      {!isSticky && children}
    </header>
  );
};
