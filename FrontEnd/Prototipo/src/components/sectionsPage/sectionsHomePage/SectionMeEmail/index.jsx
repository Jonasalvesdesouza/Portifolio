import { useContext } from 'react';

import { AppBehaviorContext } from '../../../../providers';

import { FormSendMeEmail } from '../../../fragments/forms';
import { useResponsive, useScreenWidth } from '../../../../hooks';

import styles from './styles.module.scss';

export const SectionMeEmail = () => {
  const { setCurrentCard } = useContext(AppBehaviorContext);

  useScreenWidth();

  const handleClick = () => {
    setCurrentCard(0);
  };

  return (
    <div
      className={`${useResponsive() ? styles.meEmailContainerVertical : styles.meEmailContainerHorizontal}`}
    >
      <h4 className="title1">
        Send <span className="title1 yellow">me </span>a email
        <span className="title1 yellow">.</span>
      </h4>
      <p className="parapraph homesendEmail">
        Are you in need of a project, or just say hello!
      </p>

      <FormSendMeEmail />
    </div>
  );
};
