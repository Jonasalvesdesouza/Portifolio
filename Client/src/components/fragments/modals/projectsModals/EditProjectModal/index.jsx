import { IoCloseOutline } from 'react-icons/io5';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormEditProject } from '../../../forms';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

export const EditProjectModal = ({ setIsOpen }) => {
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
				<Button className={styles.closeButton} onClick={handleClick}>
					<IoCloseOutline />
				</Button>
				<div className={styles.formsModal}>
					<FormEditProject setIsOpen={setIsOpen} />
				</div>
			</div>
		</div>
	);
};
