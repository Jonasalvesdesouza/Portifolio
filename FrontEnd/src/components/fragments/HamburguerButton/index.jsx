import { useContext, forwardRef } from 'react';
import styles from './styles.module.scss';
import { AppBehaviorContext } from '../../../providers';
import {
  useColorHamburgerBar,
  useResponsive,
  useShouldUseWhiteColor,
} from '../../../hooks';

export const HamburgerButton = forwardRef(
  ({ headerClass, handleClick }, ref) => {
    const { returShapeHam } = useContext(AppBehaviorContext);

    const colorBar = useColorHamburgerBar(useResponsive);
    const useWhiteColor = useShouldUseWhiteColor(colorBar, headerClass);

    return (
      <label ref={ref} className={`${styles.label}`}>
        <input
          className={`${styles.input}`}
          checked={returShapeHam}
          onChange={handleClick}
          type="checkbox"
          id="check"
        />
        <span
          className={`${styles.span} ${useWhiteColor ? styles.white : ''}`}
        ></span>
        <span
          className={`${styles.span} ${useWhiteColor ? styles.white : ''}`}
        ></span>
        <span
          className={`${styles.span} ${useWhiteColor ? styles.white : ''}`}
        ></span>
      </label>
    );
  },
);
