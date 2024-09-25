import { IoCloseOutline } from 'react-icons/io5';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormEditSkill } from '../../../forms';

import styles from './styles.module.scss';

export const EditSkillModal = ({ setIsOpen }) => {
	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpen);

	const handleClick = () => {
		return setIsOpen(false);
	};

	return (
		<div role="dialog" className={styles.modalBackdrop}>
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<Button className={styles.closeButton} onClick={handleClick}>
					<IoCloseOutline size={28} color="#1b1f24" />
				</Button>
				<div className={styles.formsModal}>
					<FormEditSkill setIsOpen={setIsOpen} />
				</div>
			</div>
		</div>
	);
};
