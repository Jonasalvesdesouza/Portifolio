import YellowLogo from '../../../../assets/YellowLogo.svg';
import BlackLogo from '../../../../assets/BlackLogo.svg';

import { Link } from 'react-router-dom';
import { Children, useContext } from 'react';
import { AppBehaviorContext } from '../../../../providers';
import styles from './styles.module.scss';
import { HamburgerButton } from '../../HamburguerButton';
import { useResponsive } from '../../../../hooks';

export const Header = ({ setIsOpen, children, headerClass }) => {
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

  return (
    <header>
      <div
        className={`${useResponsive() ? styles.headerContainerVertical : styles.headerContainerHorizontal}`}
      >
        <div>
          <Link to={'/'} onClick={handleClickLogo}>
            <img
              src={useBlackLogo ? BlackLogo : YellowLogo}
              alt={useBlackLogo ? 'Black Logo' : 'Yellow Logo'}
            />
          </Link>
        </div>
        <HamburgerButton headerClass={headerClass} handleClick={handleClick} />
      </div>
      {children}
    </header>
  );
};
