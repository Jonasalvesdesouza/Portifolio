import { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const useQuill = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const quillRef = useRef(null);

  const handleChange = (content) => {
    setValue(content);
  };

  return {
    value,
    onChange: handleChange,
    quillRef,
  };
};
