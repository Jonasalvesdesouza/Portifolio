import { useContext } from 'react';
import {
  AppBehaviorContext,
  UserAdmContext,
} from '../../../../../../providers';
import { SocialMediaCard } from './SocialMediaCard';
import { InsertSocialMediaModal } from '../../../../../fragments';

import styles from './styles.module.scss'

export const SectionDashboardSocialMedia = () => {
  const { isOpenDashboard, setIsOpenDashboard } =
    useContext(AppBehaviorContext);

  const { socialMediaList } = useContext(UserAdmContext);

  return (
    <>
      <div className={styles.SocialMediaContainer}>
        <h2>SocialMedia.</h2>
        <ul>
          {socialMediaList?.map((socialMedia) => {
            return (
              <SocialMediaCard key={socialMedia.id} socialMedia={socialMedia} />
            );
          })}
        </ul>
      </div>
      {isOpenDashboard === true ? (
        <InsertSocialMediaModal setIsOpenDashboard={setIsOpenDashboard} />
      ) : null}
    </>
  );
};
