import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { profileFormSchema } from '../../../../../schema';
import { TextArea, Input, Button } from '../../../index';

export const FormProfile = () => {
  const [loading, setLoading] = useState(false);

  const { editProfile, profileUpdate, profile } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileFormSchema),
    values: {
      profession: editProfile.profession,
      presentation: editProfile.presentation,
      about: editProfile.about,
      bio: editProfile.bio,
    },
  });

  const onSubmit = (payLoad) => {
    const updatedPayload = { ...payLoad, id: profile.id };
    profileUpdate(updatedPayload, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="text"
          label="Profession"
          placeholder="Profession"
          error={errors.profession}
          {...register('profession')}
        />
        <TextArea
          type="text"
          label="Presentation"
          placeholder="Presentation"
          error={errors.presentation}
          {...register('presentation')}
        />
        <TextArea
          type="text"
          label="About"
          placeholder="About"
          error={errors.about}
          {...register('about')}
        />
        <TextArea
          type="text"
          label="Bio"
          placeholder="Bio"
          error={errors.bio}
          {...register('bio')}
        />

        <Button type="submit">
          {loading ? 'Loading...' : 'To send'}

          <SlArrowRight size={20} color="#e8e9ea" />
        </Button>
      </div>
    </form>
  );
};
