import { forwardRef } from 'react';

import styles from './styles.module.scss';

export const Select = forwardRef(({ label, options, error, ...rest }, ref) => {
  return (
    <div className={styles.selectContainer}>
      <label>{label}</label>
      <div>
        <select name="module" id="module" ref={ref} {...rest}>
          {options.map((option) => {
            return (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>

      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
