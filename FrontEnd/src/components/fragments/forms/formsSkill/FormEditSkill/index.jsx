import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertSkillSchema } from '../../../../../schema';
import { OptionsSkill, OptionsCategorySkill } from '../options';

import { Button, Select } from '../../../index';

export const FormEditSkill = ({ setIsOpen }) => {
  const [loading, setLoading] = useState(false);

  const { skillUpdate, editSkill } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insertSkillSchema),
    values: {
      name: editSkill.name,
      category: editSkill.name,
    },
  });

  const onSubmit = (payLoad) => {
    skillUpdate(payLoad, setLoading, reset, setIsOpen);
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
