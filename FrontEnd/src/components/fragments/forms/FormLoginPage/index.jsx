import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../providers';
import { loginFormSchema } from '../../../../schema';
import { Input } from '../../InputDefault';
import { InputPassword } from '../../InputPassword';
import { Button } from '../../Button';

import styles from './styles.module.scss';

export const FormLoginPage = () => {
  const [loading, setLoading] = useState(false);

  const { userAdmLogin } = useContext(UserAdmContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (payLoad) => {
    userAdmLogin(payLoad, setLoading, reset);
  };

  return (
    <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputsContainer}>
        <Input
          className={styles.inputLogin}
          type="text"
          placeholder="E-mail"
          error={errors.email}
          {...register('email')}
        />
        <InputPassword
          placeholder="Password"
          error={errors.password}
          {...register('password')}
        />
      </div>

      <Button className={styles.bntLogin} type="submit">
        {loading ? <span>Loading...</span> : <span>Login</span>}

        <SlArrowRight />
      </Button>
    </form>
  );
};
