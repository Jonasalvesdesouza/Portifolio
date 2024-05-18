import { useContext } from 'react';

import YellowLogo from '../../../assets/YellowLogo.svg';

import { Button } from '../Button';
import { UserAdmContext } from '../../../providers';

export const HeaderDashboard = ({ setIsOpen }) => {
  const { userLogout, profile, setEditProfile, setEditContactProfile } =
    useContext(UserAdmContext);

  const handleClick = () => {
    setIsOpen(true);
    setEditProfile(profile);
    setEditContactProfile(profile.contact);
  };

  return (
    <header>
      <div>
        <img src={YellowLogo} alt="Logo Jonas" />
      </div>
      <div>
        <Button onClick={handleClick}>Edit Profile</Button>

        <Button onClick={userLogout}>Logout</Button>
      </div>
    </header>
  );
};
