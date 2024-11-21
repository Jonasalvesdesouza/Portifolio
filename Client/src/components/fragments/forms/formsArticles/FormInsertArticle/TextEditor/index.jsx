import React, { useState, useEffect, forwardRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from './styles.module.scss';

export const TextEditor = forwardRef(({ setEditorContent }, ref) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  const handleEditorChange = (content) => {
    setText(content);
    setEditorContent(content);
  };

  return (
    <ReactQuill
      className={`${styles.textEditor}`}
      ref={ref}
      value={text}
      onChange={handleEditorChange}
      theme="snow"
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link'],
          ['code-block'],
          ['clean'],
        ],
        history: {
          delay: 2000,
          maxStack: 500,
          userOnly: true,
        },
      }}
      formats={[
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'link',
        'code-block',
      ]}
    />
  );
});
