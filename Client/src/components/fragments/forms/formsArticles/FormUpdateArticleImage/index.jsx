import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SlArrowRight } from 'react-icons/sl';
import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { Button, InputInsertImage } from '../../../index';

import styles from './styles.module.scss';

export const FormUpdateArticleImage = ({ setIsopenUpdateImage, article }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const { articleImageUpdate } = useContext(UserAdmContext);
  const { setStateImage, setImageArticle } = useContext(AppBehaviorContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

 const onSubmit = (payLoad) => {
  if (!article) {
    console.error('Nenhum artigo selecionado');
    alert('Nenhum artigo selecionado');
    return;
  }

  const formData = new FormData();
  formData.append('path', payLoad.path[0]);

  articleImageUpdate(
    formData,
    setLoading,
    reset,
    setIsopenUpdateImage,
    article
  );
};


  const handleClick = () => {
    setStateImage(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setValue('path', event.target.files);
      const reader = new FileReader();
      reader.onload = () => {
        setImageArticle(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <InputInsertImage
        label="Insert Image"
        onChangeCapture={handleImageChange}
        type="file"
        accept=".png, .svg, .jpeg, .jpg"
        error={errors.path}
        {...register('path')}
        selectedFile={selectedFile}
      />

      <Button type="submit" onClick={handleClick}>
        {loading ? 'Loading...' : 'To send'}

        <SlArrowRight />
      </Button>
    </form>
  );
};
