import { useContext } from 'react';
import {
	AppBehaviorContext,
	UserAdmContext,
} from '../../../../../../providers';
import { JobExperienceCard } from './JobExperienceCard';
import { InsertJobExperienceModal } from '../../../../../fragments';

import styles from './styles.module.scss';

export const SectionDashboardJobExperience = () => {
	const { isOpenDashboard, setIsOpenDashboard } =
		useContext(AppBehaviorContext);

	const { jobExperienceList } = useContext(UserAdmContext);

	return (
		<>
			<div className={styles.educationContainer}>
				<h2>JobExperience.</h2>
				<ul>
					{jobExperienceList?.map((jobExperience) => {
						return (
							<JobExperienceCard
								key={jobExperience.id}
								jobExperience={jobExperience}
							/>
						);
					})}
				</ul>
			</div>

			{isOpenDashboard === true ? (
				<InsertJobExperienceModal setIsOpenDashboard={setIsOpenDashboard} />
			) : null}
		</>
	);
};
