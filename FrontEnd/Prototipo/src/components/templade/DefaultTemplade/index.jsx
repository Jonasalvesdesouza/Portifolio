import { useLocation } from 'react-router-dom';
import { Footer, Header } from '../../fragments';

import styles from './styles.module.scss';

export const DefaultTemplate = ({
  children,
  setIsOpen,
  topContent,
  headerClass,
}) => {
  const location = useLocation();
  const router = location.pathname === '/';

  return (
    <div className={`${router ? styles.backgroudHomePage : styles.backgroud}`}>
      <Header headerClass={headerClass} setIsOpen={setIsOpen}>
        {topContent}
      </Header>

      <main>{children}</main>

      <Footer />
    </div>
  );
};
