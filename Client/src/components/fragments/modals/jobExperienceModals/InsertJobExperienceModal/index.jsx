import { IoCloseOutline } from 'react-icons/io5';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormInsertJobExperience } from '../../../forms';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const InsertJobExperienceModal = ({ setIsOpenDashboard }) => {
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpenDashboard);

	const handleClick = () => {
		setFocusBtnAdd('');
		setIsOpenDashboard(false);
	};

	return (
		<div className={styles.modalBackdrop} role="dialog">
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<Button onClick={handleClick} className={styles.closeButton}>
					<IoCloseOutline />
				</Button>
				<div className={styles.formsModal}>
					<FormInsertJobExperience setIsOpenDashboard={setIsOpenDashboard} />
				</div>
			</div>
		</div>
	);
};
