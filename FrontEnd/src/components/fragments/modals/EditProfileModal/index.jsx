import { IoCloseOutline } from 'react-icons/io5';

import {
	useCloseModal,
	useImageObject,
	useObjectImage,
} from '../../../../hooks';
import {
	FormProfile,
	FormProfileContact,
	FormProfileImage,
	FormUpdateProfileImage,
} from '../../forms';
import { Button } from '../../Button';
import { useContext } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';

import styles from './styles.module.scss';

export const EditProfileModal = ({ setIsOpenEditProfile }) => {
	const { imageProfile, setImageProfile, setFocussed } =
		useContext(AppBehaviorContext);
	const { profile } = useContext(UserAdmContext);

	const profileImage = useObjectImage(profile, imageProfile);

	const { closeModalOutClick, closeModalKeyDownEsque } =
		useCloseModal(setIsOpenEditProfile);

	const handleClick = () => {
		setImageProfile('');
		setIsOpenEditProfile(false);
		setFocussed('');
	};

	return (
		<div className={styles.modalBackdrop} role="dialog">
			<div ref={closeModalOutClick} className={styles.modalContainer}>
				<div className={styles.topModal}>
					<Button onClick={handleClick} className={styles.closeButton}>
						<IoCloseOutline />
					</Button>
					<h4>Edit Profile</h4>
				</div>

				<div className={styles.imgContainer}>
					<img
						src={profileImage}
						alt="Preview"
						style={{ maxWidth: '100%', marginTop: '10px' }}
					/>
				</div>

				<div className={styles.formsModal}>
					{profile.image === null ? (
						<FormProfileImage />
					) : (
						<FormUpdateProfileImage />
					)}
					<FormProfile />
					<FormProfileContact />
				</div>
			</div>
		</div>
	);
};
