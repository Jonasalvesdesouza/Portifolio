import YellowLogo from '../../../../assets/YellowLogo.svg';
import BlackLogo from '../../../../assets/BlackLogo.svg';

import BlackNavIcon from '../../../../assets/BlackNav.svg';
import WhiteNavIcon from '../../../../assets/WhiteNav.svg';

import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../providers';
import styles from './styles.module.scss';

export const Header = ({ setIsOpen }) => {
  const { location, setRouteLocation, setCurrentCard } =
    useContext(AppBehaviorContext);

  const compareRoutes = location === '/projects' || location === '/blog';

  const CompareRouteCurriculum = location === '/curriculum' || '/';

  const handleClick = () => {
    setIsOpen(true);
    setRouteLocation(location);
    setCurrentCard(0);
  };

  return (
    <header>
      <div className={`${styles.headerContainer}`}>
        <div>
          {compareRoutes ? (
            <Link to={'/'} onClick={() => setCurrentCard(0)}>
              <img
                className={`${styles.logo}`}
                src={BlackLogo}
                alt="Black Logo"
              />
            </Link>
          ) : (
            <Link to={'/'} onClick={() => setCurrentCard(0)}>
              <img
                className={`${styles.logo}`}
                src={YellowLogo}
                alt="Yellow Logo"
              />
            </Link>
          )}
        </div>
        <div>
          {
            <Button onClick={handleClick}>
              {CompareRouteCurriculum ? (
                <img
                  className={`${styles.icon}`}
                  src={BlackNavIcon}
                  alt="Black NavIcon"
                />
              ) : compareRoutes ? (
                <img
                  className={`${styles.icon}`}
                  src={BlackNavIcon}
                  alt="Black NavIcon"
                />
              ) : (
                <img
                  className={`${styles.icon}`}
                  src={WhiteNavIcon}
                  alt="White NavIcon"
                />
              )}
            </Button>
          }
        </div>
      </div>
    </header>
  );
};
