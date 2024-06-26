import YellowLogo from '../../../../assets/YellowLogo.svg';
import BlackNavIcon from '../../../../assets/BlackNav.svg';
import { useContext } from 'react';

import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { AppBehaviorContext } from '../../../../providers';
import { NavHomePage } from '../../NavHomePage';

export const HeaderHomeMobile = ({ setIsOpen }) => {
  const { location, setRouteLocation } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setIsOpen(true);
    setRouteLocation(location);
  };

  return (
    <header>
      <div>
        <div>
          <Link to={'/'}>
            <img src={YellowLogo} alt="Yellow Logo" />
          </Link>
        </div>
        <div>
          <NavHomePage />
        </div>
        <div>
          {
            <Button onClick={handleClick}>
              <img src={BlackNavIcon} alt="Black NavIcon" />
            </Button>
          }
        </div>
      </div>
    </header>
  );
};
