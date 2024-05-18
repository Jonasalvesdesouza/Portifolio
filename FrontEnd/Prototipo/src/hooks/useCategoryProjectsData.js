import { useContext } from 'react';
import { UserAdmContext } from '../providers';

export const useCategoryProjectsData = () => {
  const { projectsList } = useContext(UserAdmContext);

  const categorys = projectsList.map((project) => project.category);
  const data = [...new Set(categorys)];

  return data;
};
