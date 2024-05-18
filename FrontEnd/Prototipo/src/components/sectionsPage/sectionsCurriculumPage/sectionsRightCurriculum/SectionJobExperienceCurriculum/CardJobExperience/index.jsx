import { useDateFormatEduIsJobExp } from '../../../../../../hooks';

export const CardJobExperience = ({ job }) => {
  const initialDate = useDateFormatEduIsJobExp(job.initialDate);
  const endDate = useDateFormatEduIsJobExp(job.endDate);

  const work = job.title;
  const office = job.companyName;

  const country = job.country;
  const state = job.state;
  const city = job.city;

  const description = job.description;

  return (
    <li>
      <div>
        <div>
          <div>{<h4>{work}</h4>}</div>
          <div>
            <span>
              {initialDate + ' - ' + (endDate === '' ? 'current' : endDate)}
            </span>
          </div>
        </div>
        <div>
          <span>{office + ' / ' + city + ' - ' + state + ' / ' + country}</span>
        </div>
        <div>
          <span>{description}</span>
        </div>
      </div>
    </li>
  );
};
