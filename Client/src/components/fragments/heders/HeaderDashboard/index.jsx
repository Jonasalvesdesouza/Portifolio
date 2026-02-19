import { useContext } from 'react';

import YellowLogo from '../../../../assets/YellowLogo.svg';

import { Button } from '../../Button';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';

import styles from './styles.module.scss';

export const HeaderDashboard = ({ setIsOpenEditProfile }) => {
  const { userLogout, profile, setEditProfile, setEditContactProfile } =
    useContext(UserAdmContext);
  const { focussed, setFocussed } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setIsOpenEditProfile(true);
    setEditProfile(profile);
    setEditContactProfile(profile?.contact);
    setFocussed('editProfile');
  };

  const classBtnEdit = `${styles.bntEdit} ${focussed === 'editProfile' ? styles.focussed : null}`;

  return (
    <header className={styles.headerDashboardContainer}>
      <div className={styles.imgContainer}>
        <img src={YellowLogo} alt="Logo Jonas" />
      </div>
      <div className={styles.btnContainer}>
        <Button className={classBtnEdit} onClick={handleClick}>
          Edit Profile
        </Button>

        <Button className={styles.bntLogout} onClick={userLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};
