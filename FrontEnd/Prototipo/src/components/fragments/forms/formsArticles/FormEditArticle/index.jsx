import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SlArrowRight } from 'react-icons/sl';
import { UserAdmContext } from '../../../../../providers';

import { Input, Button, Select } from '../../../index';

import { Category } from './options';
import { TextEditor } from './TextEditor';

export const FormEditArticle = ({ setIsOpen }) => {
  const [editorContent, setEditorContent] = useState('');
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  const { articleUpdate, editArticles } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: {
      title: editArticles.title,
      category: editArticles.category,
      description: editArticles.description,
    },
  });

  const onSubmit = (payload) => {
    payload.description = editorContent;

    articleUpdate(payload, setLoading, reset, setIsOpen);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="text"
          label="Title"
          placeholder="Title"
          error={errors.title}
          {...register('title')}
        />
        <Select
          label={'Category'}
          options={Category}
          error={errors.category}
          {...register('category')}
        />
        <TextEditor
          ref={editorRef}
          setEditorContent={setEditorContent}
          defaultValue={editArticles.description}
        />

        <Button type="submit">
          {loading ? 'Loading...' : 'To send'}
          <SlArrowRight size={20} color="#e8e9ea" />
        </Button>
      </div>
    </form>
  );
};
