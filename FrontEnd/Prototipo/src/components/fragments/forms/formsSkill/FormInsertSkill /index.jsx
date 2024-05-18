import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertSkillSchema } from '../../../../../schema';
import { OptionsSkill, OptionsCategorySkill } from '../options/';

import { Button, Select } from '../../../index';

export const FormInsertSkill = ({ setIsOpenDashboard }) => {
  const [loading, setLoading] = useState(false);

  const { skillRegister } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insertSkillSchema),
  });

  const onSubmit = (payLoad) => {
    console.log(handleSubmit);

    skillRegister(payLoad, setLoading, reset, setIsOpenDashboard);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Select
          label={'Skill'}
          options={OptionsSkill}
          error={errors.skill}
          {...register('name')}
        />

        <Select
          label={'Caregory'}
          options={OptionsCategorySkill}
          error={errors.category}
          {...register('category')}
        />

        <Button type="submit">
          {loading ? 'Loading...' : 'To send'}

          <SlArrowRight size={20} color="#e8e9ea" />
        </Button>
      </div>
    </form>
  );
};
