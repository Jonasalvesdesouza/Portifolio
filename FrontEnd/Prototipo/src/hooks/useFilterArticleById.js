import { useContext } from 'react';
import { UserAdmContext } from '../providers';

export const useFilterArticleById = (id) => {
  const { articlesList } = useContext(UserAdmContext);

  const filteredArticle = articlesList.find(
    (article) => article.id === Number(id),
  );

  const article = { ...filteredArticle, id: crypto.randomUUID() };

  return article;
};
