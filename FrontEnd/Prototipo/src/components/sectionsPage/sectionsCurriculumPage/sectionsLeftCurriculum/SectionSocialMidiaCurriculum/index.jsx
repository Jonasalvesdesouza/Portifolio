import { useContext } from 'react';

import IconGitHub from '../../../../../assets/IconGitHubGray.svg';
import IconLinkedin from '../../../../../assets/IconLinkedinGray.svg';

import { UserAdmContext } from '../../../../../providers';
import { CardSocialMedia } from './cardSocialMedia';

export const SectionSocialMidiaCurriculum = () => {
  const { socialMediaList } = useContext(UserAdmContext);

  return (
    <div>
      <div>
        <h4>Social Midia.</h4>
      </div>
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
