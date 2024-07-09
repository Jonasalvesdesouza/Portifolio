import { useLocation } from 'react-router-dom';
import { Footer, Header } from '../../fragments';

import styles from './styles.module.scss';
import { useDynamicBackground } from '../../../hooks';

export const DefaultTemplate = ({
  children,
  setIsOpen,
  topContent,
  headerClass,
  isSticky,
}) => {
  const location = useLocation();
  const router = location.pathname === '/';
  const articlePage = location.pathname === '/articlepage';
  const dynamicBackground = useDynamicBackground();

  return (
    <div
      className={
        router
          ? styles.backgroudHomePage
          : articlePage
            ? styles.backgroudArticlePage
            : styles.backgroud
      }
      style={articlePage ? { background: dynamicBackground } : {}}
    >
      <Header
        headerClass={headerClass}
        setIsOpen={setIsOpen}
        isSticky={isSticky}
      >
        {topContent}
      </Header>

      <main>{children}</main>

      <Footer />
    </div>
  );
};
