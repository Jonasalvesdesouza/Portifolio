import { forwardRef } from 'react';

export const Select = forwardRef(({ label, options, error, ...rest }, ref) => {
	return (
		<div>
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
