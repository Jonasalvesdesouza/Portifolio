import { forwardRef } from 'react';

export const TextArea = forwardRef(
  ({ label, cols, rows, error, ...rest }, ref) => {
    return (
      <div>
        <label>{label}</label>

        <textarea {...rest} ref={ref} cols={cols} rows={rows} />

        {error ? <p className="parapraph error">{error.message}</p> : null}
      </div>
    );
  },
);
