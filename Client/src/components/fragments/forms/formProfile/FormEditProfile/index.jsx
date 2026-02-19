import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SlArrowRight } from 'react-icons/sl';

import { UserAdmContext } from '../../../../../providers';
import { profileFormSchema } from '../../../../../schema';
import { TextArea, Input, Button } from '../../../index';

import styles from './styles.module.scss';

export const FormProfile = () => {
	const [loading, setLoading] = useState(false);

	const { editProfile, profileUpdate, profile } = useContext(UserAdmContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(profileFormSchema),
		values: {
			profession: editProfile?.profession,
			presentation: editProfile?.presentation,
			about: editProfile?.about,
			bio: editProfile?.bio,
		},
	});

	const onSubmit = (payLoad) => {
		const updatedPayload = { ...payLoad, id: profile?.id };
		profileUpdate(updatedPayload, setLoading, reset);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<Input
				className={styles.inputs}
				type="text"
				label="Profession"
				placeholder="Profession"
				error={errors.profession}
				{...register('profession')}
			/>
			<TextArea
				className={styles.textArea}
				type="text"
				label="Presentation"
				placeholder="Presentation"
				error={errors.presentation}
				{...register('presentation')}
			/>
			<TextArea
				className={styles.textArea}
				type="text"
				label="About"
				placeholder="About"
				error={errors.about}
				{...register('about')}
			/>
			<TextArea
				className={styles.textArea}
				type="text"
				label="Bio"
				placeholder="Bio"
				error={errors.bio}
				{...register('bio')}
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
