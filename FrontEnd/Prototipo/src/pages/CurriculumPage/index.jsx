import { useContext } from 'react';
import { Header } from '../../components/fragments';
import {
  SectionLeftCurriculum,
  SectionRightCurriculum,
} from '../../components/sectionsPage/sectionsCurriculumPage';

import styles from './styles.module.scss';
import { AppBehaviorContext } from '../../providers';

export const CurriculumPage = () => {
  const { isOpenNav } = useContext(AppBehaviorContext);

  return (
    <>
      <div className={`${styles.curriculumContainer}`}>
        <Header />
        <main>
          <div className={`${styles.leftContainer}`}>
            <SectionLeftCurriculum />
          </div>
          <div className={`${styles.rightContainer}`}>
            <SectionRightCurriculum />
          </div>
        </main>
        <footer />
      </div>
    </>
  );
};
