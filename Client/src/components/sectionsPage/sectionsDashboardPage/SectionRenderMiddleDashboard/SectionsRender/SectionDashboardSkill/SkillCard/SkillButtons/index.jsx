import { buttonsConfig } from './data';
import { Button } from '../../../../../../../fragments';

import styles from './styles.module.scss';

export const SkillButtons = ({
	skill,
	setIsOpen,
	setEditSkill,
	skillDelete,
	setLoading,
	loading,
}) => {
	const buttons = buttonsConfig(
		skill,
		setIsOpen,
		setEditSkill,
		skillDelete,
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
