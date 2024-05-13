import { useRef, useState } from "react";
import ReactQuill from "react-quill";

export const TextEditor = ({ setEditorContent }) => {
  const [text, setText] = useState('');
  const reactQuillRef = useRef(null); // Usar useRef para a referência

  const handleChange = (content) => {
    setText(content);
    setEditorContent(content);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={text}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'align': [] }],
            ['link'],
            [{ 'color': [] }],
            [{ 'code-block': 'code' }], // Botão de bloco de código
          ],
        }}
        ref={reactQuillRef} // Definir a referência diretamente
      />
    </div>
  );
};
