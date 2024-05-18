import { IconsHobbies } from '../../../../../../data';

export const CardHobbiesCurriculum = ({ hobbie }) => {
  const hobbieName = hobbie.name;

  const iconObj = IconsHobbies.find((icon) => icon.name === hobbie.name);
  const iconComponent = iconObj ? iconObj.icon : null;

  return (
    <li>
      <div>
        <div>
          <span>{hobbieName}</span>
        </div>
        <div>
          <span>{iconComponent}</span>
        </div>
      </div>
    </li>
  );
};
