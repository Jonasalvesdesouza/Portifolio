import { forwardRef } from 'react';

export const Input = forwardRef(
  ({ label, placeholder, error, ...rest }, ref) => {
    return (
      <>
        <label>{label}</label>

        <input {...rest} ref={ref} placeholder={placeholder} />

        {error ? <p className="parapraph error">{error.message}</p> : null}
      </>
    );
  },
);
