import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SlArrowRight } from 'react-icons/sl';
import { UserAdmContext } from '../../../../../providers';

import { Input, Button, Select } from '../../../index';

import { Category } from './options';
import { TextEditor } from './TextEditor';

import styles from './styles.module.scss';

export const FormEditArticle = ({ setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const [editorContent, setEditorContent] = useState('');

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
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          className={styles.inputs}
          type="text"
          label="Title"
          placeholder="Title"
          error={errors.title}
          {...register('title')}
        />
        <Select
          className={styles.selects}
          label={'Category'}
          options={Category}
          error={errors.category}
          {...register('category')}
        />
        <TextEditor
          ref={editorRef}
          placeholder="Description"
          defaultValue={editArticles.description}
          error={errors.category}
          setEditorContent={setEditorContent}
          {...register('description')}
        />

        <div className={styles.buttonContainer}>
          <Button className={styles.button} type="submit">
            {loading ? <span>Loading...</span> : <span>To send</span>}
            <SlArrowRight />
          </Button>
        </div>
      </div>
    </form>
  );
};
