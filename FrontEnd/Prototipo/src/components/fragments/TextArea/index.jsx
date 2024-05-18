import { forwardRef } from 'react';

export const TextArea = forwardRef(
  ({ label, cols, rows, error, ...rest }, ref) => {
    return (
      <div>
        <div>{label}</div>

        <textarea {...rest} ref={ref} cols={cols} rows={rows} />

        {error ? <p>{error.message}</p> : null}
      </div>
    );
  },
);
