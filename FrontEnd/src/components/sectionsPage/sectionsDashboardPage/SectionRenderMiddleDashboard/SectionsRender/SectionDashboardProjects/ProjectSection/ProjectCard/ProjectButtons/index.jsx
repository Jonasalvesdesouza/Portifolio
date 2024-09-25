import { Button } from '../../../../../../../../fragments';
import { buttonsConfig } from './data';

import styles from './styles.module.scss';

export const ProjectButtons = ({
	project,
	setIsOpen,
	setEditProjects,
	projectDelete,
	setLoading,
	loading,
}) => {
	const buttons = buttonsConfig(
		project,
		setIsOpen,
		setEditProjects,
		projectDelete,
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
