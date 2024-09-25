import { useContext, useState } from 'react';
import { IconsSkills } from '../../../../../../../data';

import { SkillButtons } from './SkillButtons';

import { UserAdmContext } from '../../../../../../../providers';
import { EditSkillModal } from '../../../../../../fragments';

import styles from './styles.module.scss';

export const SkillCard = ({ skill }) => {
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { setEditSkill, skillDelete } = useContext(UserAdmContext);

	const iconObj = IconsSkills.find((icon) => icon.name === skill.name);
	const iconComponent = iconObj ? iconObj.icon : <MdOutlineDoNotDisturbAlt />;

	return (
		<>
			<li className={styles.cardSkillContainer}>
				<div className={styles.descriptionSkillContainer}>
					<div className={styles.cardSkillName}>
						<span>{skill.name}</span>
					</div>
					<div className={styles.cardSkillIcon}>
						<span>{iconComponent}</span>
					</div>
				</div>

				<SkillButtons
					skill={skill}
					setIsOpen={setIsOpen}
					setEditSkill={setEditSkill}
					skillDelete={skillDelete}
					setLoading={setLoading}
					loading={loading}
				/>
			</li>
			{isOpen === true ? <EditSkillModal setIsOpen={setIsOpen} /> : null}
		</>
	);
};
