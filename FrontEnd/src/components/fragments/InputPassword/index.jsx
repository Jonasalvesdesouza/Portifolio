import { forwardRef, useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import styles from './styles.module.scss';

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  const [isHidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      <div className={styles.formPassword}>
        <label>{label}</label>

        <div className={styles.inputWrapper}>
          <input {...rest} ref={ref} type={isHidden ? 'text' : 'password'} />
          <span onClick={handleClick} className={styles.icon}>
            {isHidden ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
      </div>
      {error ? <p className="parapraph error">{error.message}</p> : null}
    </>
  );
});
