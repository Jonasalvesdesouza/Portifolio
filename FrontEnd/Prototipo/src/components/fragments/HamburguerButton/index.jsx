import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { AppBehaviorContext } from '../../../providers';
import { useColorHamburgerBar, useResponsive } from '../../../hooks';
import { useLocation } from 'react-router-dom';

export const HamburgerButton = ({ handleClick }) => {
  const { returShapeHam } = useContext(AppBehaviorContext);

  const colorBar = useColorHamburgerBar(useResponsive);

  return (
    <label className={`${styles.label}`} onClick={handleClick}>
      <input
        className={`${styles.input}`}
        checked={returShapeHam}
        onChange={handleClick}
        type="checkbox"
        id="check"
      />
      <span className={`${styles.span} ${colorBar ? styles.white : ''}`}></span>
      <span className={`${styles.span} ${colorBar ? styles.white : ''}`}></span>
      <span className={`${styles.span} ${colorBar ? styles.white : ''}`}></span>
    </label>
  );
};
