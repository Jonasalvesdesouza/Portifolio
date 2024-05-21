import YellowLogo from '../../../../assets/YellowLogo.svg';
import BlackLogo from '../../../../assets/BlackLogo.svg';

import { Divide as Hamburger } from 'hamburger-react';

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppBehaviorContext } from '../../../../providers';
import styles from './styles.module.scss';
import { HamburgerButton } from '../../HamburguerButton';

export const Header = ({ setIsOpen }) => {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
      <div className={`${styles.headerContainer}`}>
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