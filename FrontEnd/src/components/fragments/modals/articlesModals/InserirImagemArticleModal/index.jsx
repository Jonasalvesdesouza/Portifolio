import { useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import {
	useObjectImage,
	useCloseModal,
	useBodyOverflowToggle,
} from '../../../../../hooks';

import { Button } from '../../../Button';
import { FormArticleInsertImage } from '../../../forms';
import { AppBehaviorContext } from '../../../../../providers';

import styles from './styles.module.scss';

export const InserirImagemArticleModal = ({
	article,
	setIsOpenInsertImage,
}) => {
	const { imageArticle } = useContext(AppBehaviorContext);
	const articleImage = useObjectImage(article, imageArticle);

	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpenInsertImage);

	useBodyOverflowToggle(articleImage);

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
					<img src={articleImage} alt="Preview" />
				</div>
				<div className={styles.formsModal}>
					<FormArticleInsertImage setIsOpenInsertImage={setIsOpenInsertImage} />
				</div>
			</div>
		</div>
	);
};
