import { Footer, Header, NavHomePage } from '../../../fragments';

import styles from './styles.module.scss';

export const TemplateDefault = ({ children, setIsOpen }) => {
  return (
    <div className={`${styles.templateDefaultContainer}`}>
      <Header setIsOpen={setIsOpen} />

      <div className={`${styles.flexBox} container`}>
        <div className={`${styles.leftSideContainer}`}>
          <NavHomePage />
          <Footer />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};
