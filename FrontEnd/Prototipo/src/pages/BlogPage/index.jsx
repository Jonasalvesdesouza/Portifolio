import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';
import {
  SectionArticles,
  SectionTopBlog,
} from '../../components/sectionsPage/sectionsBlogPage';
import { NavModal } from '../../components/fragments';

export const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DefaultTemplate setIsOpen={setIsOpen} topContent={<SectionTopBlog />}>
        <div className="container">
          <SectionArticles />
        </div>
      </DefaultTemplate>
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
