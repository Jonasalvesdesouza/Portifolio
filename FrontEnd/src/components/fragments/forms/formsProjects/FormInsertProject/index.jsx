import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertProjectSchema } from '../../../../../schema';
import { TextArea, Input, Button, Select } from '../../../index';
import { Category, SubCategory } from './options';

import styles from './styles.module.scss';

export const FormInsertProject = ({ setIsOpenDashboard }) => {
  const [loading, setLoading] = useState(false);

  const { projectsRegister } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insertProjectSchema),
  });

  const onSubmit = (payLoad) => {
    projectsRegister(payLoad, setLoading, reset, setIsOpenDashboard);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.inputs}
        type="text"
        label="Title"
        placeholder="Title"
        error={errors.title}
        {...register('title')}
      />
      <Input
        className={styles.inputs}
        type="text"
        label="Web Site"
        placeholder="Web Site"
        error={errors.webSite}
        {...register('webSite')}
      />
      <Input
        className={styles.inputs}
        type="text"
        label="GitHub"
        placeholder="GitHub"
        error={errors.gitHub}
        {...register('gitHub')}
      />

      <Select
        className={styles.selects}
        label={'Category'}
        options={Category}
        error={errors.category}
        {...register('category')}
      />

      <Select
        className={styles.selects}
        label={'Sub Category'}
        options={SubCategory}
        error={errors.subCategor}
        {...register('subCategory')}
      />

      <TextArea
        className={styles.textArea}
        type="text"
        label="Description"
        placeholder="Description"
        error={errors.description}
        {...register('description')}
      />
      <div className={styles.buttonContainer}>
        <Button className={styles.button} type="submit">
          {loading ? <span>Loading...</span> : <span>To Send</span>}

          <SlArrowRight />
        </Button>
      </div>
    </form>
  );
};
