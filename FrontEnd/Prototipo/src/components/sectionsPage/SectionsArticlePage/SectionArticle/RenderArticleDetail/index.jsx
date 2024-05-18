import { useFilterArticleById } from '../../../../../hooks';
import { CardArticleDatail } from './CardArticleDatail';

export const RenderArticleDetail = () => {
  const articleId = localStorage.getItem('@IDARTICLE');

  const article = [useFilterArticleById(articleId)];

  return (
    <div>
      <ul>
        {article.map((object) => {
          return <CardArticleDatail key={object.id} object={object} />;
        })}
      </ul>
    </div>
  );
};
