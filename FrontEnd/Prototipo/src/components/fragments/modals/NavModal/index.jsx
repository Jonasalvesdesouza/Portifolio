import { useContext, forwardRef, useState, useEffect } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import {
  useGetLinkObject,
  useKeydown,
  useRemoveStringFromArray,
} from '../../../../hooks';
import { listPage } from './listPages';
import { CardListPage } from './cardListPage';

import styles from './styles.module.scss';
import IconLinkedinBlack from '../../../../assets/IconLinkedinBlack.svg';
import IconGitHubBlack from '../../../../assets/IconGithubBlack.svg';

export const NavModal = forwardRef(({ closeModal, isClosing }, ref) => {
  const { socialMediaList } = useContext(UserAdmContext);
  const { routeLocation, isOpenNav } = useContext(AppBehaviorContext);

  const linkLinkedin = useGetLinkObject(socialMediaList, 'linkedin');
  const linkGitHub = useGetLinkObject(socialMediaList, 'github');

  const closeModalKeyDown = useKeydown(closeModal);

  const ListPage = useRemoveStringFromArray(listPage, routeLocation);

  return (
    <div className={`${styles.modalOverlay}`} role="dialog">
      <div
        ref={ref}
        className={`${styles.modalBox} ${isOpenNav ? 'slide-in-right' : ''} ${isClosing ? 'slide-out-right' : ''}`}
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
