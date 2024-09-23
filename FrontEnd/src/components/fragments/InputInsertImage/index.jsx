import { forwardRef, useRef, useImperativeHandle } from 'react';
import styles from './styles.module.scss';

export const InputInsertImage = forwardRef(
  (
    { placeholder, error, type, selectedFile, isCustomFileInput, ...rest },
    externalRef,
  ) => {
    const internalRef = useRef(null);

    useImperativeHandle(externalRef, () => ({
      click: () => {
        if (internalRef.current) {
          internalRef.current.click();
        }
      },
    }));

    const handleFileButtonClick = () => {
      if (internalRef?.current) {
        internalRef.current.click();
      }
    };

    return (
      <div className={styles.inputContainer}>
        <input
          {...rest}
          ref={internalRef}
          type="file"
          className={styles.fileInput}
          style={{ display: 'none' }}
        />
        <label
          className={styles.customFileButton}
          onClick={handleFileButtonClick}
        >
          Choose File
        </label>

        <div className={styles.fileName}>
          {selectedFile ? selectedFile.name : 'No file chosen'}
        </div>
      </div>
    );
  },
);
