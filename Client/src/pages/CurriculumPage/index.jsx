import { Header } from '../../components/fragments';
import { useSectionVisibilityCurriculum } from '../../hooks';
import { useSticky } from '../../hooks';

import { SectionsPageCurriculum } from '../../data';

import styles from './styles.module.scss';

export const CurriculumPage = () => {
	const sections = SectionsPageCurriculum;
	const { headerClass, sectionRefs } = useSectionVisibilityCurriculum(sections);
	  const [isSticky, filterRef] = useSticky();

	return (
		<>
			<div 
				className={`${styles.curriculumContainer}`}
				isSticky={isSticky}
			>
				<Header headerClass={headerClass} isSticky={isSticky} />
				<main ref={filterRef}>
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
