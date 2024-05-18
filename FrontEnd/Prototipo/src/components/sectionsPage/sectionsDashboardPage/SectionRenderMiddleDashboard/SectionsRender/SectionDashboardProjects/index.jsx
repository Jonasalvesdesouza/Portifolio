import { useContext } from 'react';
import {
  AppBehaviorContext,
  UserAdmContext,
} from '../../../../../../providers';

import { ProjectCard } from './ProjectCard';
import { InsertProjectModal } from '../../../../../fragments';

export const SectionDashboardProjects = () => {
  const { isOpenDashboard, setIsOpenDashboard } =
    useContext(AppBehaviorContext);

  const { projectsList } = useContext(UserAdmContext);

  return (
    <>
      <div>
        <h2>Projects.</h2>
        <ul>
          {projectsList?.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ul>
      </div>

      {isOpenDashboard === true ? (
        <InsertProjectModal setIsOpenDashboard={setIsOpenDashboard} />
      ) : null}
    </>
  );
};
