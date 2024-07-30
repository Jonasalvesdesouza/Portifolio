import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertProjectSchema } from '../../../../../schema';

import { TextArea, Input, Button, Select } from '../../../index';

import { Category, SubCategory } from './options';

export const FormEditProject = ({ setIsOpen }) => {
  const [loading, setLoading] = useState(false);

  const { projectUpdate, editProjects } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insertProjectSchema),
    values: {
      title: editProjects.title,
      webSite: editProjects.webSite,
      gitHub: editProjects.gitHub,
      category: editProjects.category,
      SubCategory: editProjects.SubCategory,
      description: editProjects.description,
    },
  });

  const onSubmit = (payLoad) => {
    projectUpdate(payLoad, setLoading, reset, setIsOpen);
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
        <Input
          type="text"
          label="Web Site"
          placeholder="Web Site"
          error={errors.webSite}
          {...register('webSite')}
        />
        <Input
          type="text"
          label="GitHub"
          placeholder="GitHub"
          error={errors.gitHub}
          {...register('gitHub')}
        />

        <Select
          label={'Category'}
          options={Category}
          error={errors.category}
          {...register('category')}
        />

        <Select
          label={'subCategory'}
          options={SubCategory}
          error={errors.subCategor}
          {...register('subCategory')}
        />

        <TextArea
          type="text"
          label="Description"
          placeholder="Description"
          error={errors.description}
          {...register('description')}
        />

        <Button type="submit">
          {loading ? 'Loading...' : 'To send'}

          <SlArrowRight size={20} color="#e8e9ea" />
        </Button>
      </div>
    </form>
  );
};
