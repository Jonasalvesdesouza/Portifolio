import { useContext, forwardRef } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import {
  useGetLinkObject,
  useKeydown,
  useRemoveStringFromArray,
} from '../../../../hooks';
import { listPage } from './listPages';
import { CardListPage } from './cardListPage';
import { useLocation } from 'react-router-dom';

import styles from './styles.module.scss';
import IconLinkedinBlack from '../../../../assets/IconLinkedinBlack.svg';
import IconGitHubBlack from '../../../../assets/IconGithubBlack.svg';

export const NavModal = forwardRef(({ closeModal, isClosing }, ref) => {
  const { socialMediaList } = useContext(UserAdmContext);
  const { routeLocation, isOpenNav } = useContext(AppBehaviorContext);

  const linkLinkedin = useGetLinkObject(socialMediaList, 'linkedin');
  const linkGitHub = useGetLinkObject(socialMediaList, 'github');

  const ListPage = useRemoveStringFromArray(listPage, routeLocation);

  useKeydown(closeModal);

  const sideAnimation = `${isOpenNav ? 'slide-in-right' : ''} ${isClosing ? 'slide-out-right' : ''}`;

  const location = useLocation();
  const router = location.pathname === '/articlepage';

  return (
    <div className={`${styles.modalOverlay}`} role="dialog">
      <div
        ref={ref}
        className={`${styles.modalBox} ${sideAnimation}`}
        style={
          router
            ? { background: 'var(--color-black)' }
            : { background: 'var(--color-white)' }
        }
      >
        <div className={styles.middleModal}>
          <ul>
            {ListPage.map((page) => (
              <CardListPage key={page.id} page={page} />
            ))}
          </ul>
        </div>

        <div className={styles.bottomModal}>
          <div>
            <a href={linkLinkedin} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.iconLinkedin}
                src={IconLinkedinBlack}
                alt="LinkedIn Icon"
              />
            </a>
          </div>
          <div>
            <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.iconGitHub}
                src={IconGitHubBlack}
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
