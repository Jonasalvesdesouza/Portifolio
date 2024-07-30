import { useContext } from 'react';

import { UserAdmContext } from '../../../../../providers';
import { CardSocialMedia } from './cardSocialMedia';

import styles from './styles.module.scss';

export const SectionSocialMidiaCurriculum = () => {
  const { socialMediaList } = useContext(UserAdmContext);

  return (
    <div className={`${styles.sectionSocialMediaContainer}`}>
      <h4 className="title1 curriculum">Social Midia.</h4>

      <div>
        <ul>
          {socialMediaList?.map((object) => {
            return <CardSocialMedia key={object.id} object={object} />;
          })}
        </ul>
      </div>
    </div>
  );
};
