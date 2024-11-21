import { useContext, useState } from 'react';
import { EducationButtons } from './EducationButtons';
import { UserAdmContext } from '../../../../../../../providers';
import { EditEducationModal } from '../../../../../../fragments';
import { useDateFormatEduIsJobExp } from '../../../../../../../hooks';

import styles from './styles.module.scss';

export const EducationCard = ({ education }) => {
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { setEditEducation, educationDelete } = useContext(UserAdmContext);

	const initialDate = useDateFormatEduIsJobExp(education.initialDate);
	const endDate = useDateFormatEduIsJobExp(education.endDate);

	const country = education.country;
	const state = education.state;
	const city = education.city;

	const description = education.description;

	const title = education.course;
	const Institute = education.title;

	return (
		<>
			<li className={`${styles.cardEducationContainer}`}>
				<div className={`${styles.header}`}>
					<div className={`${styles.top}`}>
						<h4>{title}</h4>

						<span>
							{initialDate + ' - ' + (endDate === '' ? 'current' : endDate)}
						</span>
					</div>
					<div className={`${styles.middle}`}>
						<span>
							{Institute + ' / ' + city + ' - ' + state + ' / ' + country}
						</span>
					</div>
				</div>
				<div className={styles.footer}>
					<span>{description}</span>
					<EducationButtons
						education={education}
						setIsOpen={setIsOpen}
						setEditEducation={setEditEducation}
						educationDelete={educationDelete}
						setLoading={setLoading}
						loading={loading}
					/>
				</div>
			</li>
			{isOpen === true ? <EditEducationModal setIsOpen={setIsOpen} /> : null}
		</>
	);
};
