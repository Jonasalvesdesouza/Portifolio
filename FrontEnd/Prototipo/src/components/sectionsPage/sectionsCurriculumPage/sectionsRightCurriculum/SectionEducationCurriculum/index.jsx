import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { CardEducation } from './CardEducation';

export const SectionEducationCurriculum = () => {
  const { educationList } = useContext(UserAdmContext);

  return (
    <div>
      <div>
        <h4>Education</h4>
      </div>
      <div>
        <ul>
          {educationList?.map((school) => {
            return <CardEducation key={school.id} school={school} />;
          })}
        </ul>
      </div>
    </div>
  );
};
