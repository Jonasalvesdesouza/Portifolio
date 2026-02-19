import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useSectionVisibilityCurriculum = (sections) => {
	const sectionRefs = sections.map(() => useInView({ threshold: 0.05 }));

	const [headerClass, setHeaderClass] = useState('');

	useEffect(() => {
		const visibleSection = sectionRefs.find(([ref, inView]) => inView);
		setHeaderClass(
			visibleSection
				? sections[sectionRefs.indexOf(visibleSection)].className
				: '',
		);
	}, [sectionRefs.map(([, inView]) => inView).join(',')]);

	return { headerClass, sectionRefs };
};
