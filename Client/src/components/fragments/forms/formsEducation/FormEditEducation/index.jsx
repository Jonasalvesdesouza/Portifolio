import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { insertEducationSchema } from '../../../../../schema';

import { Input, Button, TextArea, InputDate } from '../../../index';

import styles from './styles.module.scss';

export const FormEditEducation = ({ setIsOpen }) => {
	const [loading, setLoading] = useState(false);

	const { educationUpdate, editEducation } = useContext(UserAdmContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(insertEducationSchema),
		values: {
			title: editEducation.title,
			course: editEducation.course,
			country: editEducation.country,
			city: editEducation.city,
			state: editEducation.state,
			description: editEducation.description,
			initialDate: editEducation.initialDate,
			endDate: editEducation.endDate,
		},
	});

	const onSubmit = (payLoad) => {
		educationUpdate(payLoad, setLoading, reset, setIsOpen);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<Input
				className={styles.inputs}
				type="text"
				label="institution"
				placeholder="institution"
				error={errors.title}
				{...register('title')}
			/>

			<Input
				className={styles.inputs}
				type="text"
				label="Course"
				placeholder="Course"
				error={errors.course}
				{...register('course')}
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
