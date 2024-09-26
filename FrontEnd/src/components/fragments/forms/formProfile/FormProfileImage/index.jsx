import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SlArrowRight } from 'react-icons/sl';
import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';
import { Button, InputInsertImage } from '../../../index';

import styles from './styles.module.scss';

export const FormProfileImage = () => {
	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const { profileImageRegister } = useContext(UserAdmContext);
	const { setImageProfile } = useContext(AppBehaviorContext);

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (payLoad) => {
		if (payLoad.path && payLoad.path.length > 0) {
			const formData = new FormData();
			formData.append('path', payLoad.path[0]);

			profileImageRegister(formData, setLoading, reset);
		} else {
			console.error('No files were selected.');
		}
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setSelectedFile(file);
			setValue('path', event.target.files);
			const reader = new FileReader();
			reader.onload = () => {
				setImageProfile(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<InputInsertImage
				onChangeCapture={handleImageChange}
				type="file"
				accept=".png, .svg, .jpeg, .jpg"
				error={errors.path}
				{...register('path', { required: 'Please select a file.' })}
				selectedFile={selectedFile}
			/>

			<Button type="submit">
				{loading ? 'Loading...' : 'To send'}
				<SlArrowRight />
			</Button>
		</form>
	);
};
