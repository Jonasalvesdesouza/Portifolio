import { IoCloseOutline } from 'react-icons/io5';

import { useCloseModal } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormEditArticle } from '../../../forms';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

export const EditArticleModal = ({ setIsOpen }) => {
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
					<FormEditArticle setIsOpen={setIsOpen} />
				</div>
			</div>
		</div>
	);
};
