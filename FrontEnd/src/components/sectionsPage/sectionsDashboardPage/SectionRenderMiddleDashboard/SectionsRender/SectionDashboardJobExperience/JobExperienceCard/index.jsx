import { useContext, useState } from 'react';
import { JobExperienceButtons } from './JobExperienceButtons';
import { UserAdmContext } from '../../../../../../../providers';
import { EditJobExperienceModal } from '../../../../../../fragments';
import { useDateFormatEduIsJobExp } from '../../../../../../../hooks';

import styles from './styles.module.scss';

export const JobExperienceCard = ({ jobExperience }) => {
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { setEditJobExperience, jobExperienceDelete } =
		useContext(UserAdmContext);

	const initialDate = useDateFormatEduIsJobExp(jobExperience.initialDate);
	const endDate = useDateFormatEduIsJobExp(jobExperience.endDate);

	const work = jobExperience.title;
	const office = jobExperience.companyName;

	const country = jobExperience.country;
	const state = jobExperience.state;
	const city = jobExperience.city;

	const description = jobExperience.description;

	return (
		<>
			<li className={`${styles.cardJobExperienceContainer}`}>
				<div className={`${styles.header}`}>
					<div className={`${styles.top}`}>
						{<h4>{work}</h4>}
						<span>
							{initialDate + ' - ' + (endDate === '' ? 'current' : endDate)}
						</span>
					</div>
					<div className={`${styles.middle}`}>
						<span>
							{office + ' / ' + city + ' - ' + state + ' / ' + country}
						</span>
					</div>
				</div>
				<div className={styles.footer}>
					<span>{description}</span>
					<JobExperienceButtons
						jobExperience={jobExperience}
						setIsOpen={setIsOpen}
						setEditJobExperience={setEditJobExperience}
						jobExperienceDelete={jobExperienceDelete}
						setLoading={setLoading}
						loading={loading}
					/>
				</div>
			</li>
			{isOpen === true ? (
				<EditJobExperienceModal setIsOpen={setIsOpen} />
			) : null}
		</>
	);
};
