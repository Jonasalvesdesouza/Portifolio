import { useContext } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useFilterProjects } from '../../../../hooks';
import { Projects } from './Projects';

export const SectionProjects = () => {
  const { categorysProject } = useContext(AppBehaviorContext);
  const { projectsList: allProjectsList } = useContext(UserAdmContext);
  const filteredProjectsList = useFilterProjects();

  const projectsList =
    categorysProject === '' ? allProjectsList : filteredProjectsList;

  return <Projects projectsList={projectsList} />;
};
