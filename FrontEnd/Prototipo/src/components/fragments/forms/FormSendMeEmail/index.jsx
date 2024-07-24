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

  const isResponsive = useResponsive();
  const inputClass = `${isResponsive ? 'input-medium vertical' : 'input-medium'} parapraph homeInput`;
  const textAreaClass = `${isResponsive ? 'textArea-medium vertical' : 'textArea-medium'} parapraph homeInput`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerDefault}>
      <div className={styles.formContainer}>
        <div className={styles.formLeft}>
          <div className={styles.inputContainer}>
            <span className={styles.labelSendMeEmail}>Your Name.</span>
            <Input
              className={inputClass}
              placeholder="Enter your name"
              type="text"
              error={errors.name}
              {...register('name')}
            />
          </div>

          <div className={styles.inputContainer}>
            <span className={styles.labelSendMeEmail}>Email Address.</span>
            <Input
              className={inputClass}
              placeholder="Enter your email address"
              type="email"
              error={errors.email}
              {...register('email')}
            />
          </div>
        </div>

        <div className={styles.textAreaContainer}>
          <span className={styles.labelSendMeEmail}>Your Message.</span>
          <TextArea
            className={textAreaClass}
            placeholder="Come on, don't be shy, send a message..."
            cols={30}
            row={5}
            error={errors.description}
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
    </form>
  );
};
