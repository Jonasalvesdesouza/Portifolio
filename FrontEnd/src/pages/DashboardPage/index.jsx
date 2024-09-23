import { useState } from 'react';

import { HeaderDashboard } from '../../components/fragments';
import {
  SectionRenderMiddleDashboard,
  SectionTopDashboard,
} from '../../components/sectionsPage/sectionsDashboardPage';

import { EditProfileModal } from '../../components/fragments';

import styles from './styles.module.scss';

export const DashboardPage = () => {
  const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);

  return (
    <>
      <div className={styles.dashboardContainer}>
        <HeaderDashboard setIsOpenEditProfile={setIsOpenEditProfile} />
        <SectionTopDashboard />
        <SectionRenderMiddleDashboard />
      </div>
      {isOpenEditProfile ? (
        <EditProfileModal setIsOpenEditProfile={setIsOpenEditProfile} />
      ) : null}
    </>
  );
};
