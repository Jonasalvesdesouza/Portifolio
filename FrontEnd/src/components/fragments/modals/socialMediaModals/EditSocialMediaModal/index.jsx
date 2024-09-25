import { IoCloseOutline } from 'react-icons/io5';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormEditSocialMedia } from '../../../forms';

import styles from './styles.module.scss';

export const EditSocialMediaModal = ({ setIsOpen }) => {
	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpen);

	const handleClick = () => {
		return setIsOpen(false);
	};

	return (
		<div className={styles.modalBackdrop} role="dialog">
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<Button className={styles.closeButton} onClick={handleClick}>
					<IoCloseOutline size={28} color="#1b1f24" />
				</Button>
				<div className={styles.formsModal}>
					<FormEditSocialMedia setIsOpen={setIsOpen} />
				</div>
			</div>
		</div>
	);
};
