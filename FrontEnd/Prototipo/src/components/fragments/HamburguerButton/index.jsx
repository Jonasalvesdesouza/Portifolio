import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { AppBehaviorContext } from '../../../providers';
import {
  useColorHamburgerBar,
  useResponsive,
  useShouldUseWhiteColor,
} from '../../../hooks';

export const HamburgerButton = ({ handleClick, headerClass }) => {
  const { returShapeHam } = useContext(AppBehaviorContext);

  const colorBar = useColorHamburgerBar(useResponsive);

  const useWhiteColor = useShouldUseWhiteColor(colorBar, headerClass);

  console.log(useWhiteColor);

  return (
    <label className={`${styles.label}`} onClick={handleClick}>
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
};
