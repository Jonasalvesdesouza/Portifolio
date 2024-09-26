import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { insertSocialMediaSchema } from '../../../../../schema';

import { Input, Button, Select } from '../../../index';
import { OptionsSocialMedia } from './options';

import styles from './styles.module.scss';

export const FormEditSocialMedia = ({ setIsOpen }) => {
	const { socialMediaUpdate, editSocialMedia } = useContext(UserAdmContext);
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(insertSocialMediaSchema),
		values: {
			name: editSocialMedia.name,
			link: editSocialMedia.link,
		},
	});

	const onSubmit = (payLoad) => {
		setFocusBtnAdd('');
		socialMediaUpdate(payLoad, setLoading, reset, setIsOpen);
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
