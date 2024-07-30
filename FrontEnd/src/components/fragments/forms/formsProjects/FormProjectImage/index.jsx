import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { SlArrowRight } from 'react-icons/sl';

import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { Input, Button } from '../../../index';

export const FormProjectImage = ({ setIsOpenInsertImage }) => {
  const [loading, setLoading] = useState(false);

  const { projectImageRegister } = useContext(UserAdmContext);
  const { setStateImage, setImageProject } = useContext(AppBehaviorContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (payLoad) => {
    const formData = new FormData();
    formData.append('path', payLoad.path[0]);

    projectImageRegister(formData, setLoading, reset, setIsOpenInsertImage);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageProject(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    setStateImage(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="Insert Image"
          onChangeCapture={handleImageChange}
          type="file"
          accept=".png, .svg, .jpeg, .jpg"
          error={errors.path}
          {...register('path')}
        />

        <Button type="submit" onClick={handleClick}>
          {loading ? 'Loading...' : 'To send'}

          <SlArrowRight size={20} color="black" />
        </Button>
      </div>
    </form>
  );
};
