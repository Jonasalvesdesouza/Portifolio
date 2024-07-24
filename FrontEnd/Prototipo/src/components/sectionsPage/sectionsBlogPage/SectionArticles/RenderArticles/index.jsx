import { CardArticle } from './CardArticle';

import styles from './styles.module.scss';

export const RenderArticles = ({ search, articlesResult }) => {
  return (
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
  );
};
