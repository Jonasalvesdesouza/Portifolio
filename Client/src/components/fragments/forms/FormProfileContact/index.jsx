import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../providers';
import { contactProfileSchema } from '../../../../schema';
import { Input, Button } from '../../index';

import styles from './styles.module.scss';

export const FormProfileContact = () => {
	const [loading, setLoading] = useState(false);

	const { editContactProfile, contactUpdate } = useContext(UserAdmContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(contactProfileSchema),
		values: {
			email: editContactProfile?.email,
			cel: editContactProfile?.cel,
		},
	});

	const onSubmit = (payLoad) => {
		contactUpdate(payLoad, setLoading, reset);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<Input
				className={styles.inputs}
				type="email"
				label="Email"
				placeholder="Email"
				error={errors.profession}
				{...register('email')}
			/>
			<Input
				className={styles.inputs}
				type="text"
				label="Cel"
				placeholder="Cel"
				error={errors.profession}
				{...register('cel')}
			/>

			<div className={styles.buttonContainer}>
				<Button className={styles.button} type="submit">
					{loading ? <div>Loading...</div> : <div>To Send</div>}

					<SlArrowRight />
				</Button>
			</div>
		</form>
	);
};
