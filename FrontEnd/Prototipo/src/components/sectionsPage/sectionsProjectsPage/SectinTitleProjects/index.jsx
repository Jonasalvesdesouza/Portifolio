import { FilterProjects } from './Filter';

import styles from './styles.module.scss';

export const SectionTitleProjects = () => {
  return (
    <div className="container">
      <h1 className="title1 black">Projects.</h1>
      <FilterProjects />
    </div>
  );
};
