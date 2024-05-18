import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertEducationSchema } from '../../../../../schema';

import { Input, Button, TextArea } from '../../../index';

export const FormInsertEducation = ({ setIsOpenDashboard }) => {
  const [loading, setLoading] = useState(false);

  const { educationRegister } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insertEducationSchema),
  });

  const onSubmit = (payLoad) => {
    educationRegister(payLoad, setLoading, reset, setIsOpenDashboard);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="text"
          label="institution"
          placeholder="institution"
          error={errors.title}
          {...register('title')}
        />

        <Input
          type="text"
          label="Course"
          placeholder="Course"
          error={errors.course}
          {...register('course')}
        />

        <Input
          type="text"
          label="Country"
          placeholder="Country"
          error={errors.country}
          {...register('country')}
        />

        <Input
          type="text"
          label="City"
          placeholder="City"
          error={errors.city}
          {...register('city')}
        />

        <Input
          type="text"
          label="State"
          placeholder="State"
          error={errors.state}
          {...register('state')}
        />

        <TextArea
          type="text"
          label="Description"
          placeholder="Description"
          error={errors.description}
          {...register('description')}
        />

        <Input
          type="date"
          label="InitialDate"
          placeholder="InitialDate"
          error={errors.initialDate}
          {...register('initialDate')}
        />

        <Input
          type="date"
          label="EndDate"
          placeholder="EndDate"
          error={errors.endDate}
          {...register('endDate')}
        />

        <Button type="submit">
          {loading ? 'Loading...' : 'To send'}

          <SlArrowRight
            size={20}
            color="black"
            /* color="#e8e9ea" */
          />
        </Button>
      </div>
    </form>
  );
};
