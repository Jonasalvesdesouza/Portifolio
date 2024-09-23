import { useContext } from 'react';
import { Button } from '../../../../../fragments';
import { AppBehaviorContext } from '../../../../../../providers';

import styles from './styles.module.scss';

export const CardNav = ({ section }) => {
  const { setNavDashboard, setIsOpenDashboard, focussed, setFocussed } =
    useContext(AppBehaviorContext);

  const handleClick = () => {
    setNavDashboard(section.router);
    setIsOpenDashboard(false);
    setFocussed(section.name);
  };

  const classButton = `${styles.bntSection} ${focussed === section.name ? styles.focussed : null}`;

  return (
    <li className={styles.bntContainer}>
      <Button className={classButton} onClick={handleClick}>
        {section.name}
      </Button>
    </li>
  );
};
