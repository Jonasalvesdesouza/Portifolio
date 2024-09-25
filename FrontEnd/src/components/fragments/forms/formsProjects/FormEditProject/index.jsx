import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { insertProjectSchema } from '../../../../../schema';
import { TextArea, Input, Button, Select } from '../../../index';
import { Category, SubCategory } from './options';

import styles from './styles.module.scss';

export const FormEditProject = ({ setIsOpen }) => {
	const { projectUpdate, editProjects } = useContext(UserAdmContext);
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(insertProjectSchema),
		values: {
			title: editProjects.title,
			webSite: editProjects.webSite,
			gitHub: editProjects.gitHub,
			category: editProjects.category,
			SubCategory: editProjects.SubCategory,
			description: editProjects.description,
		},
	});

	const onSubmit = (payLoad) => {
		setFocusBtnAdd('');
		projectUpdate(payLoad, setLoading, reset, setIsOpen);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<Input
				className={styles.inputs}
				type="text"
				label="Title"
				placeholder="Title"
				error={errors.title}
				{...register('title')}
			/>
			<Input
				className={styles.inputs}
				type="text"
				label="Web Site"
				placeholder="Web Site"
				error={errors.webSite}
				{...register('webSite')}
			/>
			<Input
				className={styles.inputs}
				type="text"
				label="GitHub"
				placeholder="GitHub"
				error={errors.gitHub}
				{...register('gitHub')}
			/>

			<Select
				className={styles.selects}
				label={'Category'}
				options={Category}
				error={errors.category}
				{...register('category')}
			/>

			<Select
				className={styles.selects}
				label={'subCategory'}
				options={SubCategory}
				error={errors.subCategor}
				{...register('subCategory')}
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
					{loading ? <div>Loading...</div> : <div>To Send</div>}

					<SlArrowRight />
				</Button>
			</div>
		</form>
	);
};
