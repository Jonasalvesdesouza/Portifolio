import { useState } from 'react';
import { DefaultTemplate } from '../../components/templade';
import {
  SectionProjects,
  SectionTitleProjects,
} from '../../components/sectionsPage/sectionsProjectsPage';
import { NavModal } from '../../components/fragments';

export const ProjectsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DefaultTemplate setIsOpen={setIsOpen}>
      <div>
        <SectionTitleProjects />
        <SectionProjects />
      </div>
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </DefaultTemplate>
  );
};
