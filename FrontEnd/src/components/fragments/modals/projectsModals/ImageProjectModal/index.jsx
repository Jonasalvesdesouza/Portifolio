import { IoCloseOutline } from 'react-icons/io5';
import { Button } from '../../../Button';
import { FormProjectImage } from '../../../forms';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';
import {
	useBodyOverflowToggle,
	useObjectImage,
	useCloseModal,
} from '../../../.././../hooks';

import styles from './styles.module.scss';

export const ImageProjectModal = ({ project, setIsOpenInsertImage }) => {
	const { imageProject } = useContext(AppBehaviorContext);
	const projectImage = useObjectImage(project, imageProject);

	console.log(projectImage);

	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpenInsertImage);

	useBodyOverflowToggle(projectImage);

	const handleClick = () => {
		setIsOpenInsertImage(false);
	};

	return (
		<div className={styles.modalBackdrop} role="dialog">
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<div className={styles.topModal}>
					<Button onClick={handleClick} className={styles.closeButton}>
						<IoCloseOutline />
					</Button>
					<h4>Insert imagem</h4>
				</div>
				<div className={styles.imgContainer}>
					<img src={projectImage} alt="Preview" />
				</div>
				<div className={styles.formsModal}>
					<FormProjectImage setIsOpenInsertImage={setIsOpenInsertImage} />
				</div>
			</div>
		</div>
	);
};
