import { useState } from 'react';

import { DefaultTemplate } from '../../components/templade';
import {
  SectionArticles,
  SectionTopBlog,
} from '../../components/sectionsPage/sectionsBlogPage';
import { NavModal } from '../../components/fragments';

import styles from './styles.module.scss';
import { useDynamicTopValue } from '../../hooks';

export const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topValue = useDynamicTopValue();

  return (
    <DefaultTemplate setIsOpen={setIsOpen}>
      <div className="container">
        <div className={`${styles.fixedTop}`} style={{ top: topValue }}>
          <SectionTopBlog />
        </div>
        <div className={`${styles.scrollableContent}`}>
          <SectionArticles />
        </div>
      </div>
      {isOpen ? <NavModal setIsOpen={setIsOpen} /> : null}
    </DefaultTemplate>
  );
};
