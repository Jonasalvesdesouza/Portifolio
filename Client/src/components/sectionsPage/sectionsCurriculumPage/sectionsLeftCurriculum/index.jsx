import React, { forwardRef } from 'react';

import { SectionAboutCurriculum } from './SectionAboutCurriculum';
import { SectionContactCurriculum } from './SectionContactCurriculum';
import { SectionSocialMidiaCurriculum } from './SectionSocialMidiaCurriculum';
import { SectionTopLeftCurriclum } from './SectionTopLeftCurriclum';

import styles from './styles.module.scss';

export const SectionLeftCurriculum = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${styles.sectionLeftcontainer}`}>
      <SectionTopLeftCurriclum />
      <SectionAboutCurriculum />
      <SectionContactCurriculum />
      <SectionSocialMidiaCurriculum />
    </div>
  );
});
