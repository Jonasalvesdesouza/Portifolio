import { IoCloseOutline } from 'react-icons/io5';

import IconLinkedinBalck from '../../../../assets/IconLinkedinBlack.svg';

import IconGitHubBlack from '../../../../assets/IconGithubBlack.svg';

import { Button } from '../../Button';
import { useContext } from 'react';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import {
  useGetLinkObject,
  useKeydown,
  useOutclick,
  useRemoveStringFromArray,
} from '../../../../hooks';
import { listPage } from './listPages';
import { CardListPage } from './cardListPage';

import styles from './styles.module.scss';

export const NavModal = ({ setIsOpen, isOpen }) => {
  const { socialMediaList } = useContext(UserAdmContext);

  const linkLinkedin = useGetLinkObject(socialMediaList, 'linkedin');
  const linkGitHub = useGetLinkObject(socialMediaList, 'github');

  const { routeLocation, setReturShapeHam } = useContext(AppBehaviorContext);

  const closeModalOutClick = useOutclick(() => {
    setIsOpen(false);
    setReturShapeHam(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpen(false);
    setReturShapeHam(false);
  });

  const ListPage = useRemoveStringFromArray(listPage, routeLocation);

  const handleClick = () => {
    setIsOpen(false);
    setReturShapeHam(false);
  };

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.visible : ''}`}
      role="dialog"
      ref={closeModalOutClick}
    >
      <div className={`${styles.modalBox}`}>
        <div className={`${styles.closeContainer}`}>
          <Button onClick={handleClick}>
            <IoCloseOutline className={`${styles.closeIcon}`} />
          </Button>
        </div>
        <div className={`${styles.middleModal}`}>
          <ul>
            {ListPage.map((page) => {
              return <CardListPage key={page.id} page={page} />;
            })}
          </ul>
        </div>

        <div className={`${styles.bottomModal}`}>
          <div>
            <a href={linkLinkedin} target="_blank">
              <img
                className={`${styles.iconLinkedin}`}
                src={IconLinkedinBalck}
                alt="Linkdin Icon"
              />
            </a>
          </div>
          <div>
            <a href={linkGitHub} target="_blank">
              <img
                className={`${styles.iconGitHub}`}
                src={IconGitHubBlack}
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
