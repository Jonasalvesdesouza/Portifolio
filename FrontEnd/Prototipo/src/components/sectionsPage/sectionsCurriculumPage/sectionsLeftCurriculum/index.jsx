import { SectionAboutCurriculum } from './SectionAboutCurriculum';
import { SectionContactCurriculum } from './SectionContactCurriculum';
import { SectionSocialMidiaCurriculum } from './SectionSocialMidiaCurriculum';
import { SectionTopLeftCurriclum } from './SectionTopLeftCurriclum';

import styles from './styles.module.scss';

export const SectionLeftCurriculum = () => {
  return (
    <div className={`${styles.sectionLeftcontainer}`}>
      <SectionTopLeftCurriclum />
      <SectionAboutCurriculum />
      <SectionContactCurriculum />
      <SectionSocialMidiaCurriculum />
    </div>
  );
};
