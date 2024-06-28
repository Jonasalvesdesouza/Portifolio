import { useContext } from 'react';

import { AppBehaviorContext, UserAdmContext } from '../../../../providers';
import { useArticlesSearch } from '../../../../hooks';

import { RenderArticles } from './RenderArticles';

export const SectionArticles = () => {
  const { search } = useContext(AppBehaviorContext);
  const { articlesList } = useContext(UserAdmContext);

  const articlesResult = useArticlesSearch(articlesList, search);

  return (
    <div>
      <RenderArticles search={search} articlesResult={articlesResult} />
    </div>
  );
};
