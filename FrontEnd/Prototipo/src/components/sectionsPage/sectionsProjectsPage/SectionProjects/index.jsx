import { FilterProjects } from './Filter';
import { RenderProjects } from './RenderProjects';

export const SectionProjects = () => {
  return (
    <div className="container">
      <FilterProjects />
      <RenderProjects />
    </div>
  );
};
