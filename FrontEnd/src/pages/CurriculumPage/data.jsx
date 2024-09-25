import {
	SectionLeftCurriculum,
	SectionRightCurriculum,
} from '../../components/sectionsPage/sectionsCurriculumPage';

export const sectionsConfig = [
	{
		component: <SectionLeftCurriculum key="left" />,
		className: 'headerSection1',
	},
	{
		component: <SectionRightCurriculum key="right" />,
		className: 'headerSection2',
	},
];
