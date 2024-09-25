import { useContext } from 'react';
import {
	AppBehaviorContext,
	UserAdmContext,
} from '../../../../../../providers';
import { EducationCard } from './EducationCard';
import { InsertEducationModal } from '../../../../../fragments';

import styles from './styles.module.scss';

export const SectionDashboardEducation = () => {
	const { isOpenDashboard, setIsOpenDashboard } =
		useContext(AppBehaviorContext);

	const { educationList } = useContext(UserAdmContext);

	return (
		<>
			<div className={styles.educationContainer}>
				<h2>Education.</h2>
				<ul>
					{educationList?.map((education) => {
						return <EducationCard key={education.id} education={education} />;
					})}
				</ul>
			</div>

			{isOpenDashboard === true ? (
				<InsertEducationModal setIsOpenDashboard={setIsOpenDashboard} />
			) : null}
		</>
	);
};
