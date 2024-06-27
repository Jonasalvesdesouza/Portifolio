import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';
import {
  SectionAticles,
  SectionTopBlog,
} from '../../components/sectionsPage/sectionsBlogPage';
import { NavModal } from '../../components/fragments';

export const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DefaultTemplate setIsOpen={setIsOpen}>
      <div className="container">
        <SectionTopBlog />
        <SectionAticles />
      </div>
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </DefaultTemplate>
  );
};
