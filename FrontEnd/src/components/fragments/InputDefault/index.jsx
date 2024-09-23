import { forwardRef, useContext } from 'react';

import styles from './styles.module.scss';

export const Input = forwardRef(
  ({ label, placeholder, error, testRouter, ...rest }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <label>{label}</label>

        <input {...rest} ref={ref} placeholder={placeholder} />

        {error ? <p className="parapraph error">{error.message}</p> : null}
      </div>
    );
  },
);
