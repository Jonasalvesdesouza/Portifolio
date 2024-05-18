import { useContext } from 'react';
import { UserAdmContext } from '../providers';

export const useCategoryArticlesData = () => {
  const { articlesList } = useContext(UserAdmContext);

  const categorys = articlesList.map((article) => article.category);
  const data = [...new Set(categorys)];
  return data;
};
