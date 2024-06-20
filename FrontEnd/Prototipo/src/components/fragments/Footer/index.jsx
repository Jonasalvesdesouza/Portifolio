import { PiCopyrightLight } from 'react-icons/pi';

import IconLinkedin from '../../../assets/IconLinkedinYellow.svg';
import IconGitHub from '../../../assets/IconGitHubYellow.svg';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../providers';
import { useGetLinkObject, useResponsive } from '../../../hooks';

export const Footer = () => {
  const { socialMediaList } = useContext(UserAdmContext);
  const { location } = useContext(AppBehaviorContext);

  const linkLinkedin = useGetLinkObject(socialMediaList, 'linkedin');
  const linkGitHub = useGetLinkObject(socialMediaList, 'github');

  const renderClass = () => {
    if (location === '/') {
      return useResponsive();
    } else {
      return true;
    }
  };

  return (
    <footer>
      <div
        className={`${renderClass() ? styles.footerContainerVertical : styles.footerContainerHorizontal}`}
      >
        <div
          className={`${renderClass() ? styles.footerIconContainerVertical : styles.footerIconContainerHorizontal}`}
        >
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

        <div
          className={`${renderClass() ? styles.copyrighContainerVertical : styles.copyrighContainerHorizontal}`}
        >
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
