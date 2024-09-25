import { MdOutlineDoNotDisturbAlt } from 'react-icons/md';

import { IconsSkills } from '../../../../../../data';

import styles from './styles.module.scss';

export const CardSkillCurriculum = ({ skill }) => {
	const skillName = skill.name;

	const iconObj = IconsSkills.find((icon) => icon.name === skill.name);
	const iconComponent = iconObj ? iconObj.icon : <MdOutlineDoNotDisturbAlt />;

	return (
		<li className={styles.cardSkillContainer}>
			<div className={styles.cardSkillName}>
				<span>{skillName}</span>
			</div>
			<div className={styles.cardSkillIcon}>
				<span>{iconComponent}</span>
			</div>
		</li>
	);
};
