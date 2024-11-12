import { forwardRef } from 'react';

export const Input = forwardRef(
	({ label, placeholder, error, testRouter, ...rest }, ref) => {
		return (
			<div>
				<label>{label}</label>

				<input {...rest} ref={ref} placeholder={placeholder} />

				{error ? <p className="parapraph error">{error.message}</p> : null}
			</div>
		);
	},
);
