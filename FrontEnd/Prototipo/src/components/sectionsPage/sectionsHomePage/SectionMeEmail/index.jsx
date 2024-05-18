import { useContext } from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import { Button } from '../../../fragments';
import { AppBehaviorContext } from '../../../../providers';

import { FormSendMeEmail } from '../../../fragments/forms';
import { useScreenWidth } from '../../../../hooks';
import { smallResolution } from '../../../../config';

import styles from './styles.module.scss';

export const SectionMeEmail = () => {
  const { setCurrentCard, screenWidth } = useContext(AppBehaviorContext);

  useScreenWidth();

  const handleClick = () => {
    setCurrentCard(0);
  };

  return (
    <div className={`${styles.meEmailContainer}`}>
      <div>
        <div>
          <h4 className="title1">
            Send <span className="title1 yellow">me </span>a email
            <span className="title1 yellow">.</span>
          </h4>
          <p className="parapraph home">
            Are you in need of a project, or just say hello!
          </p>
        </div>
        <div>
          <FormSendMeEmail />
        </div>
      </div>

      {screenWidth >= smallResolution ? (
        <Button id="button" onClick={handleClick}>
          <IoIosArrowUp size={55} color="#1b1f24" />
        </Button>
      ) : null}
    </div>
  );
};
