import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertHobbySchema } from '../../../../../schema';

import { Input, Button, Select } from '../../../index';

export const FormEditHobby = ({ setIsOpen }) => {
  const [loading, setLoading] = useState(false);

  const { hobbyUpdate, editHobby } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insertHobbySchema),
    values: {
      name: editHobby.name,
    },
  });

  const onSubmit = (payLoad) => {
    console.log(handleSubmit);

    hobbyUpdate(payLoad, setLoading, reset, setIsOpen);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="text"
          label="Name"
          placeholder="Name"
          error={errors.name}
          {...register('name')}
        />

        <Button type="submit">
          {loading ? 'Loading...' : 'To send'}

          <SlArrowRight size={20} color="#e8e9ea" />
        </Button>
      </div>
    </form>
  );
};
