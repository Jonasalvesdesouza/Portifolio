import { useContext } from 'react';
import {
	AppBehaviorContext,
	UserAdmContext,
} from '../../../../../../providers';
import { SkillCard } from './SkillCard';
import { InsertSkillModal } from '../../../../../fragments';

import styles from './styles.module.scss';

export const SectionDashboardSkill = () => {
	const { isOpenDashboard, setIsOpenDashboard } =
		useContext(AppBehaviorContext);

	const { skillList } = useContext(UserAdmContext);

	return (
		<>
			<div className={styles.sectionDashboardSkill}>
				<h2>Skill.</h2>
				<ul>
					{skillList?.map((skill) => {
						return <SkillCard key={skill.id} skill={skill} />;
					})}
				</ul>
			</div>
			{isOpenDashboard === true ? (
				<InsertSkillModal setIsOpenDashboard={setIsOpenDashboard} />
			) : null}
		</>
	);
};
