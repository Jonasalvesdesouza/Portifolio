import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const TextEditor = ({ setEditorContent }) => {
  const [text, setText] = useState('');

  const handleEditorChange = (content, editor) => {
    setText(content);
    setEditorContent(content);
  };

  return (
    <Editor
      apiKey="wglqt5j1s1zt8d5f7mqju5hldqn3st3tu2r0m49dxvehcs01"
      initialValue="<p>Conteúdo inicial</p>"
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | code',
        codesample_languages: [
          { text: 'JavaScript', value: 'javascript' },
          { text: 'HTML', value: 'html' },
          // Adicione outras linguagens conforme necessário
        ],
        codesample_content_css: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};
