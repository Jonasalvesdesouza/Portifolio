import { useContext, useState } from 'react';
import { SocialMediaButtons } from './SocialMediaButtons';
import { UserAdmContext } from '../../../../../../../providers';
import { EditSocialMediaModal } from '../../../../../../fragments';

import styles from './styles.module.scss';

export const SocialMediaCard = ({ socialMedia }) => {
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { setEditSocialMedia, socialMediaDelete } = useContext(UserAdmContext);

	return (
		<>
			<li className={styles.cardContainer}>
				<span>{socialMedia.name}</span>

				<SocialMediaButtons
					socialMedia={socialMedia}
					setIsOpen={setIsOpen}
					setEditSocialMedia={setEditSocialMedia}
					socialMediaDelete={socialMediaDelete}
					setLoading={setLoading}
					loading={loading}
				/>
			</li>
			{isOpen === true ? <EditSocialMediaModal setIsOpen={setIsOpen} /> : null}
		</>
	);
};
