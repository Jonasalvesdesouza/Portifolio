import { IoCloseOutline } from 'react-icons/io5';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const ViewMessageModal = ({ setIsOpen }) => {
	const { viewMessage } = useContext(UserAdmContext);

	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpen);

	const handleClick = () => {
		return setIsOpen(false);
	};

	return (
		<div className={styles.modalBackdrop} role="dialog">
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<Button onClick={handleClick} className={styles.closeButton}>
					<IoCloseOutline />
				</Button>

				<div className={styles.containerContact}>
					<div>
						<p className={styles.label}>Name:</p>
						<p className={styles.name}>{viewMessage.name}</p>
					</div>
					<div>
						<p className={styles.label}>Email:</p>
						<p className={styles.email}>{viewMessage.email}</p>
					</div>
					<div>
						<p className={styles.label}>Message:</p>
						<p className={styles.description}>{viewMessage.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
