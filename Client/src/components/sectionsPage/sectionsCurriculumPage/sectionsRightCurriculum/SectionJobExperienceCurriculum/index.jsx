import { useContext, useMemo } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { CardJobExperience } from './CardJobExperience';

import styles from './styles.module.scss';

export const SectionJobExperienceCurriculum = () => {
	const { jobExperienceList } = useContext(UserAdmContext);

	const sortedJobExperienceList = useMemo(() => {
		if (!jobExperienceList) return [];

		return [...jobExperienceList].sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime()
		);
	}, [jobExperienceList]);

	return (
		<div className={styles.sectionJobExperienceContainer}>
			<div className={styles.jobExperienceHeader}>
				<h4 className="title1 black">Job Experience</h4>
			</div>
			<div>
				<ul>
					{sortedJobExperienceList.map((job) => (
						<CardJobExperience key={job.id} job={job} />
					))}
				</ul>
			</div>
		</div>
	);
};
