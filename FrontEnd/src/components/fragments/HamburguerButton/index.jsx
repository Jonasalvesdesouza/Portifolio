import { useContext, forwardRef } from 'react';
import { AppBehaviorContext } from '../../../providers';
import {
  useColorHamburgerBar,
  useResponsive,
  useShouldUseWhiteColor,
} from '../../../hooks';

import styles from './styles.module.scss';

export const HamburgerButton = forwardRef(
  ({ headerClass, handleClick, isOpenNav }, ref) => {
    const { returShapeHam, location } = useContext(AppBehaviorContext);

    const colorBar = useColorHamburgerBar(useResponsive);
    const useWhiteColor = useShouldUseWhiteColor(colorBar, headerClass);
    const testRouter =
      location === '/articlepage' ||
      location === '/' ||
      location === '/curriculum';

    const colorIsOpen = isOpenNav && !testRouter;

    const classSpan = `${styles.span} ${colorIsOpen ? styles.black : useWhiteColor || isOpenNav ? styles.white : null}`;

    return (
      <label ref={ref} className={`${styles.label}`}>
        <input
          className={`${styles.input}`}
          checked={returShapeHam}
          onChange={handleClick}
          type="checkbox"
          id="check"
        />
        <span className={classSpan}></span>
        <span className={classSpan}></span>
        <span className={classSpan}></span>
      </label>
    );
  },
);
