import { FormSendMeEmail } from '../../../fragments/forms';
import { useResponsive, useScreenWidth } from '../../../../hooks';

import styles from './styles.module.scss';

export const SectionMeEmail = () => {
  useScreenWidth();

  return (
    <div
      id="email"
      className={`${useResponsive() ? styles.meEmailContainerVertical : styles.meEmailContainerHorizontal}`}
    >
      <div className={`${styles.meEmailContainer}`}>
        <div className={styles.meEmailHeader}>
          <h4 className="title1 black">
            Send <span className="title1 yellow">me </span>a email
            <span className="title1 yellow">.</span>
          </h4>
          <p className="parapraph homesendEmail">
            Are you in need of a project, or just say hello!
          </p>
        </div>
        <FormSendMeEmail />
      </div>
    </div>
  );
};
