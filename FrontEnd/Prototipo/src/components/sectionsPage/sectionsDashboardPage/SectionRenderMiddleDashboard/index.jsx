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

export const SectionRenderMiddleDashboard = () => {
  const { user } = useContext(UserAdmContext);
  const { navDashboard } = useContext(AppBehaviorContext);

  const sectionDashboard = localStorage.getItem('@SECTIONDASHBOARD');

  const sections = [
    <SectionDashboardProjects />,
    <SectionDashboardArticles />,
    <SectionDashboardSocialMedia />,
    <SectionDashboardHobby />,
    <SectionDashboardSkill />,
    <SectionDashboardEducation />,
    <SectionDashboardJobExperience />,
    <SectionDashboardMessage />,
  ];

  return (
    <div>
      {sectionDashboard === null ? (
        <h3> Seja bem vindo {user.name} </h3>
      ) : (
        sections[sectionDashboard]
      )}
    </div>
  );
};
