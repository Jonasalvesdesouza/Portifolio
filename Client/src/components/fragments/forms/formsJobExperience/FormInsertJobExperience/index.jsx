import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { insertJobexperienceSchema } from '../../../../../schema';

import { Input, Button, TextArea, InputDate } from '../../../index';

import styles from './styles.module.scss';

export const FormInsertJobExperience = ({ setIsOpenDashboard }) => {
	const [loading, setLoading] = useState(false);

	const { jobExperienceRegister } = useContext(UserAdmContext);
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(insertJobexperienceSchema),
	});

	const onSubmit = (payLoad) => {
		setFocusBtnAdd('');
		jobExperienceRegister(payLoad, setLoading, reset, setIsOpenDashboard);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<Input
				className={styles.inputs}
				type="text"
				label="title"
				placeholder="title"
				error={errors.title}
				{...register('title')}
			/>

			<Input
				className={styles.inputs}
				type="text"
				label="Company Name"
				placeholder="Company Name"
				error={errors.course}
				{...register('companyName')}
			/>

			<Input
				className={styles.inputs}
				type="text"
				label="Country"
				placeholder="Country"
				error={errors.country}
				{...register('country')}
			/>

			<Input
				className={styles.inputs}
				type="text"
				label="City"
				placeholder="City"
				error={errors.city}
				{...register('city')}
			/>

			<Input
				className={styles.inputs}
				type="text"
				label="State"
				placeholder="State"
				error={errors.state}
				{...register('state')}
			/>

			<InputDate
				className={styles.inputs}
				type="date"
				label="InitialDate"
				placeholder="InitialDate"
				error={errors.initialDate}
				{...register('initialDate')}
			/>

			<InputDate
				className={styles.inputs}
				type="date"
				label="EndDate"
				placeholder="EndDate"
				error={errors.endDate}
				{...register('endDate')}
			/>

			<TextArea
				className={styles.textArea}
				type="text"
				label="Description"
				placeholder="Description"
				error={errors.description}
				{...register('description')}
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
