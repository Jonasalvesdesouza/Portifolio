import { useDateFormatEduIsJobExp } from '../../../../../../hooks';

export const CardEducation = ({ school }) => {
  const initialDate = useDateFormatEduIsJobExp(school.initialDate);
  const endDate = useDateFormatEduIsJobExp(school.endDate);

  const test = school.title;

  const country = school.country;
  const state = school.state;
  const city = school.city;

  const description = school.description;

  const title = school.course;
  const Institute = school.title;

  return (
    <li>
      <div>
        <div>
          <div>
            <h4>{title}</h4>
          </div>
          <div>
            <span>
              {initialDate + ' - ' + (endDate === '' ? 'current' : endDate)}
            </span>
          </div>
        </div>
        <div>
          <span>
            {Institute + ' / ' + city + ' - ' + state + ' / ' + country}
          </span>
        </div>
        <div>
          <span>{description}</span>
        </div>
      </div>
    </li>
  );
};
