import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertSocialMediaSchema } from '../../../../../schema';
import { Input, Button, Select } from '../../../index';
import { OptionsSocialMedia } from './options';

import styles from './styles.module.scss';

export const FormInsertSocialMedia = ({ setIsOpenDashboard }) => {
	const [loading, setLoading] = useState(false);

	const { socialMediaRegister } = useContext(UserAdmContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(insertSocialMediaSchema),
	});

	const onSubmit = (payLoad) => {
		socialMediaRegister(payLoad, setLoading, reset, setIsOpenDashboard);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<Select
				className={styles.selects}
				label={'Social Media'}
				options={OptionsSocialMedia}
				error={errors.name}
				{...register('name')}
			/>

			<Input
				className={styles.inputs}
				type="text"
				label="Link"
				placeholder="Link"
				error={errors.link}
				{...register('link')}
			/>
			<div className={styles.buttonContainer}>
				<Button className={styles.button} type="submit">
					{loading ? <span>Loading...</span> : <span>To Send</span>}

					<SlArrowRight />
				</Button>
			</div>
		</form>
	);
};
