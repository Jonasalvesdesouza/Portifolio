import { forwardRef } from 'react';

export const Input = forwardRef(
  ({ label, placeholder, error, ...rest }, ref) => {
    return (
      <div>
        <label>{label}</label>

        <div>
          <input {...rest} ref={ref} placeholder={placeholder}></input>
        </div>

        {error ? <p>{error.message}</p> : null}
      </div>
    );
  },
);
