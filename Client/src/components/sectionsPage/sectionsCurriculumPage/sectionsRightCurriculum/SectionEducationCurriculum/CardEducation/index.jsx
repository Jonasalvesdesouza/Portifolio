import { useDateFormatEduIsJobExp } from '../../../../../../hooks';

import styles from './styles.module.scss';

export const CardEducation = ({ school }) => {
	const initialDate = useDateFormatEduIsJobExp(school.initialDate);
	const endDate = useDateFormatEduIsJobExp(school.endDate);

	const country = school.country;
	const state = school.state;
	const city = school.city;

	const description = school.description;

	const title = school.course;
	const Institute = school.title;

	return (
		<li className={`${styles.cardEducationContainer}`}>
			<div className={`${styles.cardEducationHeader}`}>
				<div className={`${styles.top}`}>
					<h4 className="title1 curriculum right">{title}</h4>

					<span className="title3 curriculum">
						{initialDate + ' - ' + (endDate === '' ? 'current' : endDate)}
					</span>
				</div>
				<div>
					<span className="parapraph curriculum italic">
						{Institute + ' / ' + city + ' - ' + state + ' / ' + country}
					</span>
				</div>
			</div>
			<div>
				<span className="parapraph curriculum">{description}</span>
			</div>
		</li>
	);
};
