import { Footer, Header, NavHomePage } from '../../fragments';

import styles from './styles.module.scss';

export const TempladeDesktop = ({ children, setIsOpen }) => {
  return (
    <div className={`${styles.templateDefaultContainer}`}>
      <Header setIsOpen={setIsOpen} />

      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.leftSideContainer}`}>
          <NavHomePage />
          <Footer />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};
