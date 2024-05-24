import { useContext } from 'react';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext } from '../../../../providers';

import { FormSendMeEmail } from '../../../fragments/forms';
import { useScreenWidth } from '../../../../hooks';
import { smallResolution } from '../../../../config';

import styles from './styles.module.scss';

export const SectionMeEmail = () => {
  const { setCurrentCard, screenWidth, screenHeight } =
    useContext(AppBehaviorContext);
  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  useScreenWidth();

  const handleClick = () => {
    setCurrentCard(0);
  };

  return (
    <div
      className={`${isHeightHigh ? 'container' : styles.meEmailContainerHorizontal}`}
    >
      <h4 className="title1">
        Send <span className="title1 yellow">me </span>a email
        <span className="title1 yellow">.</span>
      </h4>
      <p className="parapraph home">
        Are you in need of a project, or just say hello!
      </p>

      <FormSendMeEmail />
    </div>
  );
};
