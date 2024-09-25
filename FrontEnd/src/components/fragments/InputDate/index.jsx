import { forwardRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

export const InputDate = forwardRef(
	({ label, placeholder, error, ...rest }, ref) => {
		return (
			<div className={styles.inputContainer}>
				<label>{label}</label>

				<div className={styles.inputWrapper}>
					<input type="date" {...rest} ref={ref} placeholder={placeholder} />

					<FaCalendarAlt className={styles.calendarIcon} />
				</div>

				{error ? <p className="paragraph error">{error.message}</p> : null}
			</div>
		);
	},
);
