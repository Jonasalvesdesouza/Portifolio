import { buttonsConfig } from './data';
import { Button } from '../../../../../../../fragments';

import styles from './styles.module.scss';

export const EducationButtons = ({
	education,
	setIsOpen,
	setEditEducation,
	educationDelete,
	setLoading,
	loading,
}) => {
	const buttons = buttonsConfig(
		education,
		setIsOpen,
		setEditEducation,
		educationDelete,
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
