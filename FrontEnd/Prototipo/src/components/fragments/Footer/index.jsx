import { PiCopyrightLight } from 'react-icons/pi';

import IconLinkedin from '../../../assets/IconLinkedinYellow.svg';
import IconGitHub from '../../../assets/IconGitHubYellow.svg';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { UserAdmContext } from '../../../providers';
import { useGetLinkObject } from '../../../hooks';

export const Footer = () => {
  const { socialMediaList } = useContext(UserAdmContext);

  const linkLinkedin = useGetLinkObject(socialMediaList, 'linkedin');
  const linkGitHub = useGetLinkObject(socialMediaList, 'github');

  return (
    <footer>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.footerIconContainer}`}>
          <div>
            <a href={linkLinkedin} target="_blank">
              <img src={IconLinkedin} alt="Linkdin Icon" />
            </a>
          </div>
          <div>
            <a href={linkGitHub} target="_blank">
              <img src={IconGitHub} alt="GitHub Icon" />
            </a>
          </div>
        </div>

        <div className={`${styles.copyrighContainer}`}>
          <div>
            <PiCopyrightLight className={`${styles.icon}`} />
          </div>
          <div>
            <p className="text white">Jonas Alves de Souza 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
