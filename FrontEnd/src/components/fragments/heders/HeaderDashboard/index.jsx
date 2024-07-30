import { useContext, useState } from 'react';

import YellowLogo from '../../../../assets/YellowLogo.svg';

import { Button } from '../../Button';
import { UserAdmContext } from '../../../../providers';
import { NavModal } from '../../modals/NavModal';

export const HeaderDashboard = () => {
  const { userLogout, profile, setEditProfile, setEditContactProfile } =
    useContext(UserAdmContext);
  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen ? <NavModal setIsOpen={setIsOpen} isOpen={isOpen} /> : null}
    </header>
  );
};
