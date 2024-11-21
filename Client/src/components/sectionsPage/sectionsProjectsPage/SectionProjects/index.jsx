import { useContext, useRef, useState } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import {
	useFilterProjects,
	useFilterSubCategory,
	useScrollArrowsVisibility,
} from '../../../../hooks';

import styles from './styles.module.scss';
import { ProjectSection } from './ProjectSection';

export const SectionProjects = () => {
	const { categorysProject } = useContext(AppBehaviorContext);
	const { projectsList: allProjectsList } = useContext(UserAdmContext);
	const filteredProjectsList = useFilterProjects();

	const projectsList =
		categorysProject === '' ? allProjectsList : filteredProjectsList;
	const independentProjects = useFilterSubCategory(projectsList, 'Independent');
	const studyProjects = useFilterSubCategory(projectsList, 'Study');

	const independentRef = useRef(null);
	const studyRef = useRef(null);

	const [
		showIndependentArrows,
		showStudyArrows,
		canScrollLeftIndependent,
		canScrollLeftStudy,
		scrollContainer,
	] = useScrollArrowsVisibility(independentRef, studyRef, projectsList);

	return (
		<>
			<div className={styles.projectContainer}>
				<ProjectSection
					title="Independent Projects."
					projects={independentProjects}
					refProp={independentRef}
					showArrows={showIndependentArrows}
					canScrollLeft={canScrollLeftIndependent}
					scrollContainer={scrollContainer}
				/>
				<ProjectSection
					title="Study Projects"
					projects={studyProjects}
					refProp={studyRef}
					showArrows={showStudyArrows}
					canScrollLeft={canScrollLeftStudy}
					scrollContainer={scrollContainer}
				/>
			</div>
		</>
	);
};
