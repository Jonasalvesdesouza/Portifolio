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
	const classContent = `${isResponsive ? `${styles.content} ${styles.vertical}` : `${styles.content}`}`;
	const inputClass = `${isResponsive ? `${styles.vertical}` : ''}`;
	const textAreaClass = `${isResponsive ? `${styles.right} ${styles.vertical}` : `${styles.right}`}`;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
			<div className={classContent}>
				<div className={styles.left}>
					<Input
						className={inputClass}
						label="Your Name."
						placeholder="Enter your name"
						type="text"
						error={errors.name}
						{...register('name')}
					/>

					<Input
						className={inputClass}
						label="Email Address."
						placeholder="Enter your email address"
						type="email"
						error={errors.email}
						{...register('email')}
					/>
				</div>

				<div className={textAreaClass}>
					<TextArea
						label="Your Message."
						placeholder="Come on, don't be shy, send a message..."
						cols={30}
						row={5}
						error={errors.description}
						{...register('description')}
					/>
				</div>
			</div>

			<Button className="bntSendMeEmail" type="submit">
				{!loading ? <span>TO SEND</span> : <span>SENDING...</span>}
				<SlArrowRight className="icon" />
			</Button>
		</form>
	);
};
