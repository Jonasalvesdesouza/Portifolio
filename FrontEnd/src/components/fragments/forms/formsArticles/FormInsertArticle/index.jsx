import { useContext, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { SlArrowRight } from 'react-icons/sl';
import { AppBehaviorContext, UserAdmContext } from '../../../../../providers';

import { Input, Button, Select } from '../../../index';

import { Category } from './options';
import { TextEditor } from './TextEditor';

import styles from './styles.module.scss';

export const FormInsertArticle = ({ setIsOpenDashboard }) => {
	const [editorContent, setEditorContent] = useState('');
	const [loading, setLoading] = useState(false);

	const { articleRegister } = useContext(UserAdmContext);
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (payload) => {
		payload.description = editorContent;
		setFocusBtnAdd('');

		articleRegister(payload, setLoading, reset, setIsOpenDashboard);
	};

	const editorRef = useRef(null);

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
			<Select
				className={styles.selects}
				label="Category"
				options={Category}
				error={errors.category}
				{...register('category')}
			/>
			<TextEditor
				ref={editorRef}
				setEditorContent={setEditorContent}
				{...register('description')}
			/>
			<div className={styles.buttonContainer}>
				<Button className={styles.button} type="submit">
					{loading ? <span>Loading...</span> : <span>To send</span>}
					<SlArrowRight />
				</Button>
			</div>
		</form>
	);
};
