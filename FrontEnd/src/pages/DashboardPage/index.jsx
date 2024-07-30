import { useState } from 'react';

import { HeaderDashboard } from '../../components/fragments';

import {
  SectionRenderMiddleDashboard,
  SectionTopDashboard,
} from '../../components/sectionsPage/sectionsDashboardPage';

import { EditProfileModal } from '../../components/fragments';

export const DashboardPage = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <HeaderDashboard setIsOpen={setIsOpen} />
        <SectionTopDashboard />
        <SectionRenderMiddleDashboard />
      </div>
      {IsOpen ? <EditProfileModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
