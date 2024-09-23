import { CardNav } from './CardNav';
import { listSection } from './listSections';

import styles from './styles.module.scss';

export const DashboardNav = () => {
  const sections = listSection;

  return (
    <nav className={styles.dashboardNav}>
      <ul>
        {sections.map((section) => {
          return <CardNav key={section.id} section={section} />;
        })}
      </ul>
    </nav>
  );
};
