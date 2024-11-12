import { useDateFormatEduIsJobExp } from '../../../../../../hooks';

import styles from './styles.module.scss';

export const CardJobExperience = ({ job }) => {
	const initialDate = useDateFormatEduIsJobExp(job.initialDate);
	const endDate = useDateFormatEduIsJobExp(job.endDate);

	const work = job.title;
	const office = job.companyName;

	const country = job.country;
	const state = job.state;
	const city = job.city;

	const description = job.description;

	return (
		<li className={`${styles.cardJobExperienceContainer}`}>
			<div className={`${styles.cardJobExperienceHeader}`}>
				<div className={`${styles.TopHeader}`}>
					{<h4 className="title1 curriculum right">{work}</h4>}

					<span className="title3 curriculum">
						{initialDate +
							' - ' +
							(endDate === 'Invalid date format' ? 'Current' : endDate)}
					</span>
				</div>
				<div className="parapraph curriculum italic">
					<span>{office + ' / ' + city + ' - ' + state + ' / ' + country}</span>
				</div>
			</div>
			<div>
				<span className="parapraph curriculum">{description}</span>
			</div>
		</li>
	);
};
