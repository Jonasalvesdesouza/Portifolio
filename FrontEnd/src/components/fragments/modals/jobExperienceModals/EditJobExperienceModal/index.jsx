import { IoCloseOutline } from 'react-icons/io5';
import { useContext } from 'react';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormEditJobExperience } from '../../../forms';

import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const EditJobExperienceModal = ({ setIsOpen }) => {
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpen);

	const handleClick = () => {
		setFocusBtnAdd('');
		setIsOpen(false);
	};

	return (
		<div className={styles.modalBackdrop} role="dialog">
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<Button onClick={handleClick} className={styles.closeButton}>
					<IoCloseOutline />
				</Button>
				<div className={styles.formsModal}>
					<FormEditJobExperience setIsOpen={setIsOpen} />
				</div>
			</div>
		</div>
	);
};
