import { useContext, useState } from 'react';
import { JobExperienceButtons } from './JobExperienceButtons';
import { UserAdmContext } from '../../../../../../../providers';
import { EditJobExperienceModal } from '../../../../../../fragments';
import { useDateFormatEduIsJobExp } from '../../../../../../../hooks';

export const JobExperienceCard = ({ jobExperience }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { setEditJobExperience, jobExperienceDelete } =
    useContext(UserAdmContext);

  const initialDate = useDateFormatEduIsJobExp(jobExperience.initialDate);
  const endDate = useDateFormatEduIsJobExp(jobExperience.endDate);

  const work = jobExperience.title;
  const office = jobExperience.companyName;

  const country = jobExperience.country;
  const state = jobExperience.state;
  const city = jobExperience.city;

  const description = jobExperience.description;

  return (
    <>
      <li>
        <div>
          <JobExperienceButtons
            jobExperience={jobExperience}
            setIsOpen={setIsOpen}
            setEditJobExperience={setEditJobExperience}
            jobExperienceDelete={jobExperienceDelete}
            setLoading={setLoading}
            loading={loading}
          />
          <div>
            <div>{<h4>{work}</h4>}</div>
            <div>
              <span>
                {initialDate + ' - ' + (endDate === '' ? 'current' : endDate)}
              </span>
            </div>
          </div>
          <div>
            <span>
              {office + ' / ' + city + ' - ' + state + ' / ' + country}
            </span>
          </div>
          <div>
            <span>{description}</span>
          </div>
        </div>
      </li>
      {isOpen === true ? (
        <EditJobExperienceModal setIsOpen={setIsOpen} />
      ) : null}
    </>
  );
};
