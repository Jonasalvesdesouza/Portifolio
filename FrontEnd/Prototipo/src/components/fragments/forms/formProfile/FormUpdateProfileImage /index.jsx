import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SlArrowRight } from 'react-icons/sl';
import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { Input, Button } from '../../../index';

export const FormUpdateProfileImage = () => {
  const [loading, setLoading] = useState(false);

  const { profileImageUpdate } = useContext(UserAdmContext);
  const { setImageProfile } = useContext(AppBehaviorContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (payLoad) => {
    const formData = new FormData();
    formData.append('path', payLoad.path[0]);

    profileImageUpdate(formData, setLoading, reset);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="Update Image"
          onChangeCapture={handleImageChange}
          type="file"
          accept=".png, .svg, .jpeg, .jpg"
          error={errors.path}
          {...register('path')}
        />

        <Button type="submit">
          {loading ? 'Loading...' : 'To send'}

          <SlArrowRight size={20} color="black" />
        </Button>
      </div>
    </form>
  );
};
