import { useContext, useState } from 'react';
import { SocialMediaButtons } from './SocialMediaButtons';

import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import { UserAdmContext } from '../../../../../../../providers';
import { EditSocialMediaModal } from '../../../../../../fragments';

import styles from './styles.module.scss';

export const SocialMediaCard = ({ socialMedia }) => {
	const { setEditSocialMedia, socialMediaDelete } = useContext(UserAdmContext);

	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const iconCard =
		socialMedia.name === 'Linkedin' ? <FaLinkedinIn /> : <FiGithub />;

	return (
		<>
			<li className={styles.cardContainer}>
				<span>{iconCard}</span>

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
