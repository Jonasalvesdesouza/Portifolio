import { useContext } from 'react';

import { CardArticle } from './CardArticle';
import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useArticlesSearch } from '../../../../hooks';

import styles from './styles.module.scss';

export const SectionArticles = () => {
  const { search } = useContext(AppBehaviorContext);
  const { articlesList } = useContext(UserAdmContext);

  const articlesResult = useArticlesSearch(articlesList, search);

  return (
    <div>
      <div className={`${styles.renderArticlesContainer}`}>
        {search ? (
          <div className={`${styles.searchInfoContainer}`}>
            <span>Listed articles: {articlesResult.length}</span>
            <p>Search results for: {search}</p>
          </div>
        ) : null}
        <ul>
          {articlesResult.length > 0 ? (
            articlesResult.map((article) => {
              return <CardArticle key={article.id} article={article} />;
            })
          ) : (
            <p className="title2 black">No results found!</p>
          )}
        </ul>
      </div>
    </div>
  );
};
