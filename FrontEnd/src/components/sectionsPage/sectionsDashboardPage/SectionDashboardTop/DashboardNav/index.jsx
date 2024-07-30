import { CardNav } from './CardNav';
import { listSection } from './listSections';

export const DashboardNav = () => {
  const sections = listSection;

  return (
    <nav>
      <ul>
        {sections.map((section) => {
          return <CardNav key={section.id} section={section} />;
        })}
      </ul>
    </nav>
  );
};
