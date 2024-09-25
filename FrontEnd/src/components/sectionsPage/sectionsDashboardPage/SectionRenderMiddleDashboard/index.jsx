import { useContext } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';

import {
  SectionDashboardArticles,
  SectionDashboardEducation,
  SectionDashboardHobby,
  SectionDashboardJobExperience,
  SectionDashboardMessage,
  SectionDashboardProjects,
  SectionDashboardSkill,
  SectionDashboardSocialMedia,
} from './SectionsRender';

import styles from './styles.module.scss';

export const SectionRenderMiddleDashboard = () => {
  const { user } = useContext(UserAdmContext);
  const { navDashboard } = useContext(AppBehaviorContext);

  const sections = [
    <SectionDashboardProjects />,
    <SectionDashboardArticles />,
    <SectionDashboardSocialMedia />,
     <SectionDashboardSkill />,
    <SectionDashboardEducation />,
    <SectionDashboardJobExperience />,
    <SectionDashboardMessage />,
  ];

  return (
    <div className={styles.middleDashboardContaier}>
      {navDashboard === null ? (
        <div className={styles.apresentationSection}>
          <h3> Seja bem vindo {user.name} </h3>
        </div>
      ) : (
        sections[navDashboard]
      )}
    </div>
  );
};
