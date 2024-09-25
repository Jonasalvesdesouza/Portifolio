import { Button } from '../../../../../../../fragments';
import { buttonsConfig } from './data';

import styles from './styles.module.scss';

export const SocialMediaButtons = ({
	socialMedia,
	setIsOpen,
	setEditSocialMedia,
	socialMediaDelete,
	setLoading,
	loading,
}) => {
	const buttons = buttonsConfig(
		socialMedia,
		setIsOpen,
		setEditSocialMedia,
		socialMediaDelete,
		setLoading,
		loading,
	);
	return (
		<div className={styles.btnContainer}>
			{buttons.map((btn, index) => (
				<Button key={index} onClick={btn.action}>
					{btn.icon}
				</Button>
			))}
		</div>
	);
};
