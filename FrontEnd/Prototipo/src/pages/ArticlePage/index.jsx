import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';

import {
  SectionArticle,
  SectionTopArticle,
} from '../../components/sectionsPage/SectionsArticlePage';

import { NavModal } from '../../components/fragments';

export const ArticlePage = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <DefaultTemplate setIsOpen={setIsOpen}>
      <div>
        <SectionTopArticle />
        <SectionArticle />
      </div>
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </DefaultTemplate>
  );
};
