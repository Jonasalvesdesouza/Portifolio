import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { Button, Input, TextArea } from '../..';
import { sendMeEmailFormSchema } from '../../../../schema';
import { UserAdmContext } from '../../../../providers';
import styles from './styles.module.scss';
import { useResponsive } from '../../../../hooks';

export const FormSendMeEmail = () => {
  const { messageMeRegister } = useContext(UserAdmContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(sendMeEmailFormSchema),
  });

  const onSubmit = (payLoad) => {
    messageMeRegister(payLoad, setLoading, reset);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.formContainer} ${useResponsive() ? styles.left : ''}`}
        >
          <div>
            <div className={`${styles.inputContainer}`}>
              <span className={`${styles.labelSendMeEmail}`}>You Name.</span>
              <Input
                className={` ${useResponsive() ? 'input-medium vertical parapraph homeInput' : 'input-medium parapraph homeInput'}`}
                placeholder="Enter your name"
                type="text"
                error={errors.title}
                {...register('name')}
              />
            </div>

            <div className={`${styles.inputContainer}`}>
              <span className={`${styles.labelSendMeEmail}`}>
                Email Anddress.
              </span>
              <Input
                className={` ${useResponsive() ? 'input-medium vertical parapraph homeInput' : 'input-medium parapraph homeInput'}`}
                placeholder="Enter your email address"
                type="email"
                error={errors.email}
                {...register('email')}
              />
            </div>
          </div>

          <div className={`${styles.textAreaContainer}`}>
            <span className={`${styles.labelSendMeEmail}`}>Your Message.</span>
            <TextArea
              className={`${useResponsive() ? 'textArea-medium vertical parapraph homeInput' : 'textArea-medium parapraph homeInput'}`}
              placeholder="Come on, don't be shy, send a message..."
              cols={30}
              row={5}
              error={errors.message}
              {...register('description')}
            />
          </div>
        </div>
        <div className="bntSendMeEmail">
          <Button type="submit">
            {!loading ? <span>TO SEND</span> : <span>SENDING...</span>}
            <SlArrowRight className="icon" />
          </Button>
        </div>
      </div>
    </form>
  );
};
