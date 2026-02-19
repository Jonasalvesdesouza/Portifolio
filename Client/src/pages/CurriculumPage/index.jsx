import { Header } from '../../components/fragments';
import { useSectionVisibilityCurriculum } from '../../hooks';
import { useSticky, useResponsive } from '../../hooks';

import { SectionsPageCurriculum } from '../../data';

import styles from './styles.module.scss';

export const CurriculumPage = () => {
	const sections = SectionsPageCurriculum;

	const { headerClass, sectionRefs } = useSectionVisibilityCurriculum(sections);
	  const [isSticky, filterRef] = useSticky();
	  const isResponsive = useResponsive();
	 
	return (
		<>
			<div 
				className={`${styles.curriculumContainer}`}
			>
				<Header headerClass={headerClass} isSticky={isSticky} />
				<main ref={isResponsive === true ? filterRef : null} >
					<div ref={sectionRefs[0][0]} className={`${styles.leftContainer}`}>
						{sections[0].component}
					</div>
					<div  ref={sectionRefs[1][0]} className={`${styles.rightContainer}`}>
						{sections[1].component}
					</div>
				</main>
				<footer />
			</div>
		</>
	);
};
