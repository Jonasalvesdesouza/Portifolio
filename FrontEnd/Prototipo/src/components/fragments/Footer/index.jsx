import { PiCopyrightLight } from 'react-icons/pi';

import IconLinkedin from '../../../assets/IconLinkedinYellow.svg';
import IconGitHub from '../../../assets/IconGitHubYellow.svg';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../providers';
import { useGetLinkObject } from '../../../hooks';

export const Footer = () => {
  const { socialMediaList } = useContext(UserAdmContext);
  const { setCurrentCard, screenWidth, screenHeight } =
    useContext(AppBehaviorContext);
  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  const linkLinkedin = useGetLinkObject(socialMediaList, 'linkedin');
  const linkGitHub = useGetLinkObject(socialMediaList, 'github');

  return (
    <footer>
      <div className={`${isHeightHigh ? 'container' : styles.footerContainer}`}>
        <div className={`${isHeightHigh ? '' : styles.footerIconContainer}`}>
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

        <div className={`${isHeightHigh ? '' : styles.copyrighContainer}`}>
          <div>
            <PiCopyrightLight
              className={`${isHeightHigh ? '' : styles.icon}`}
            />
          </div>
          <div>
            <p className="text white">Jonas Alves de Souza 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
