import YellowLogo from '../../../assets/YellowLogo.svg';
import BlackLogo from '../../../assets/BlackLogo.svg';

import BlackNavIcon from '../../../assets/BlackNav.svg';
import WhiteNavIcon from '../../../assets/WhiteNav.svg';

import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../providers';
import styles from './styles.module.scss';

export const Header = ({ setIsOpen }) => {
  const { location, setRouteLocation, setCurrentCard } =
    useContext(AppBehaviorContext);

  const compareRoutes = location === '/projects' || location === '/blog';

  const CompareRouteCurriculum = location === '/curriculum' || '/';

  return (
    <header>
      <div className={`${styles.headerContainer} container`}>
        <div className="marginTop">
          {compareRoutes ? (
            <Link to={'/'} onClick={() => setCurrentCard(0)}>
              <img src={BlackLogo} alt="Black Logo" />
            </Link>
          ) : (
            <Link to={'/'} onClick={() => setCurrentCard(0)}>
              <img src={YellowLogo} alt="Yellow Logo" />
            </Link>
          )}
        </div>
        <div className="marginTop">
          {
            <Button
              onClick={() => {
                setIsOpen(true);
                setRouteLocation(location);
                setCurrentCard(0);
              }}
            >
              {CompareRouteCurriculum ? (
                <img src={BlackNavIcon} alt="Black NavIcon" />
              ) : compareRoutes ? (
                <img src={BlackNavIcon} alt="Black NavIcon" />
              ) : (
                <img src={WhiteNavIcon} alt="White NavIcon" />
              )}
            </Button>
          }
        </div>
      </div>
    </header>
  );
};
