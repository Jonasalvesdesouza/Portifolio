import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { AppBehaviorContext } from '../../../providers';

export const HamburgerButton = ({ handleClick }) => {
  const { returShapeHam } = useContext(AppBehaviorContext);

  return (
    <label className={`${styles.label}`} onClick={handleClick}>
      <input
        className={`${styles.input}`}
        checked={returShapeHam}
        onChange={handleClick}
        type="checkbox"
        id="check"
      />
      <span className={`${styles.span}`}></span>
      <span className={`${styles.span}`}></span>
      <span className={`${styles.span}`}></span>
    </label>
  );
};
