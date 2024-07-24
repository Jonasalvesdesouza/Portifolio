import { useLocation } from 'react-router-dom';
import { Footer, Header, NavModal } from '../../fragments';

import styles from './styles.module.scss';
import { useDynamicBackground } from '../../../hooks';
import { useContext } from 'react';
import { AppBehaviorContext } from '../../../providers';

export const DefaultTemplate = ({
  children,
  topContent,
  headerClass,
  isSticky,
}) => {
  const location = useLocation();
  const router = location.pathname === '/';
  const articlePage = location.pathname === '/articlepage';
  const dynamicBackground = useDynamicBackground();

  return (
    <>
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
        <Header headerClass={headerClass} isSticky={isSticky}>
          {topContent}
        </Header>

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
};
