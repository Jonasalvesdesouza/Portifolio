import { IoCloseOutline } from 'react-icons/io5';
import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormInsertProject } from '../../../forms';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const InsertProjectModal = ({ setIsOpenDashboard }) => {
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
				<Button className={styles.closeButton} onClick={handleClick}>
					<IoCloseOutline />
				</Button>
				<div className={styles.formsModal}>
					<FormInsertProject setIsOpenDashboard={setIsOpenDashboard} />
				</div>
			</div>
		</div>
	);
};
