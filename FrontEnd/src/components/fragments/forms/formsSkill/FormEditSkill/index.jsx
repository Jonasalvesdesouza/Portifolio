import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { insertSkillSchema } from '../../../../../schema';
import { OptionsSkill, OptionsCategorySkill } from '../options';

import { Button, Select } from '../../../index';

import styles from './styles.module.scss';

export const FormEditSkill = ({ setIsOpen }) => {
	const { skillUpdate, editSkill } = useContext(UserAdmContext);
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(insertSkillSchema),
		values: {
			name: editSkill.name,
			category: editSkill.category,
		},
	});

	const onSubmit = (payLoad) => {
		setFocusBtnAdd('');
		skillUpdate(payLoad, setLoading, reset, setIsOpen);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<Select
				className={styles.selects}
				label={'Skill'}
				options={OptionsSkill}
				error={errors.skill}
				{...register('name')}
			/>

			<Select
				className={styles.selects}
				label={'Caregory'}
				options={OptionsCategorySkill}
				error={errors.category}
				{...register('category')}
			/>

			<div className={styles.buttonContainer}>
				<Button className={styles.button} type="submit">
					{loading ? 'Loading...' : 'To send'}

					<SlArrowRight size={20} color="#e8e9ea" />
				</Button>
			</div>
		</form>
	);
};
