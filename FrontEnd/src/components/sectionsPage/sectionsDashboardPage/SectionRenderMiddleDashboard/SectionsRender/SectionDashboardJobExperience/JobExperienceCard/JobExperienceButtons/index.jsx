import { buttonsConfig } from './data';
import { Button } from '../../../../../../../fragments';

import styles from './styles.module.scss';

export const JobExperienceButtons = ({
	jobExperience,
	setIsOpen,
	setEditJobExperience,
	jobExperienceDelete,
	setLoading,
	loading,
}) => {
	const buttons = buttonsConfig(
		jobExperience,
		setIsOpen,
		setEditJobExperience,
		jobExperienceDelete,
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
