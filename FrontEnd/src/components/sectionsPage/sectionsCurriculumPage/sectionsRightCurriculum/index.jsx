import { SectionEducationCurriculum } from './SectionEducationCurriculum';
import { SectionHobbiesCurriculum } from './SectionHobbiesCurriculum';
import { SectionJobExperienceCurriculum } from './SectionJobExperienceCurriculum';
import { SectionSkillCurriculum } from './SectionSkillCurriculum';

import styles from './styles.module.scss';

export const SectionRightCurriculum = () => {
  return (
    <div className={`${styles.sectionRightContainer}`}>
      <SectionJobExperienceCurriculum />
      <SectionSkillCurriculum />
      <SectionEducationCurriculum />
      {/*   <SectionHobbiesCurriculum /> */}
    </div>
  );
};
