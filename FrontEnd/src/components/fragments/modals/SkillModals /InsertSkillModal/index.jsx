import { IoCloseOutline } from 'react-icons/io5';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormInsertSkill } from '../../../forms';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const InsertSkillModal = ({ setIsOpenDashboard }) => {
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpenDashboard);

	const handleClick = () => {
		setIsOpenDashboard(false);
		setFocusBtnAdd('');
	};

	return (
		<div className={styles.modalBackdrop} role="dialog">
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<Button className={styles.closeButton} onClick={handleClick}>
					<IoCloseOutline />
				</Button>
				<div className={styles.formsModal}>
					<FormInsertSkill setIsOpenDashboard={setIsOpenDashboard} />
				</div>
			</div>
		</div>
	);
};
