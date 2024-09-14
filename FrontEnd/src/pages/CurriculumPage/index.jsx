import { Header } from '../../components/fragments';
import {
  SectionLeftCurriculum,
  SectionRightCurriculum,
} from '../../components/sectionsPage/sectionsCurriculumPage';
import { useSectionVisibilityCurriculum } from '../../hooks';

import styles from './styles.module.scss';

export const CurriculumPage = () => {
  const sections = [
    {
      component: <SectionLeftCurriculum key="left" />,
      className: 'headerSection1',
    },
    {
      component: <SectionRightCurriculum key="right" />,
      className: 'headerSection2',
    },
  ];

  const { headerClass, sectionRefs } = useSectionVisibilityCurriculum(sections);

  return (
    <>
      <div className={`${styles.curriculumContainer}`}>
        <Header headerClass={headerClass} />
        <main>
          <div ref={sectionRefs[0][0]} className={`${styles.leftContainer}`}>
            {sections[0].component}
          </div>
          <div ref={sectionRefs[1][0]} className={`${styles.rightContainer}`}>
            {sections[1].component}
          </div>
        </main>
        <footer />
      </div>
    </>
  );
};
