import React, { forwardRef } from 'react';
import { SectionEducationCurriculum } from './SectionEducationCurriculum';
import { SectionJobExperienceCurriculum } from './SectionJobExperienceCurriculum';
import { SectionSkillCurriculum } from './SectionSkillCurriculum';

import styles from './styles.module.scss';

export const SectionRightCurriculum = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${styles.sectionRightContainer}`}>
      <SectionJobExperienceCurriculum />
      <SectionSkillCurriculum />
      <SectionEducationCurriculum />
    </div>
  );
});
