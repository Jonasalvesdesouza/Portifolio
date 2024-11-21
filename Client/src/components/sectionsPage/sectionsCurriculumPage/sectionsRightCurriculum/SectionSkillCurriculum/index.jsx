import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { CardSkillCurriculum } from './CardSkillCurriculum';

import styles from './styles.module.scss';

export const SectionSkillCurriculum = () => {
  const { skillList } = useContext(UserAdmContext);

  const sortedSkillList = skillList?.sort((a, b) => a.id - b.id);

  return (
    <div className={`${styles.sectionSkillContainer}`}>
      <div className={`${styles.sectionSkillHeader}`}>
        <h4 className="title1 black">Skills</h4>
      </div>
      <div className={`${styles.skillsContainer}`}>
        <ul>
          {sortedSkillList?.map((skill) => {
            return <CardSkillCurriculum key={skill.id} skill={skill} />;
          })}
        </ul>
      </div>
    </div>
  );
};
