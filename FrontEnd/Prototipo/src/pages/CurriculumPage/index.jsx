import { useState } from 'react';
import { Header, NavModal } from '../../components/fragments';
import {
  SectionLeftCurriculum,
  SectionRightCurriculum,
} from '../../components/sectionsPage/sectionsCurriculumPage';

import styles from './styles.module.scss';

export const CurriculumPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.curriculumContainer}`}>
      <Header setIsOpen={setIsOpen} />
      <main>
        <div className={`${styles.leftContainer}`}>
          <SectionLeftCurriculum />
        </div>
        <div className={`${styles.rightContainer}`}>
          <SectionRightCurriculum />
        </div>
      </main>

      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </div>
  );
};
