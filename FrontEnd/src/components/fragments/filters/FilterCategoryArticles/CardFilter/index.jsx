import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBehaviorContext } from '../../../../../providers';

export const CardFilter = ({ category, className, closeModal }) => {
  const {
    setCategorysArticles,
    setSearch,
    isOpenNav,
    setIsOpenNav,
    setFocusedButton,
    focusedButton,
  } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setFocusedButton(category);
    setIsOpenNav(false);
    setCategorysArticles(category);
    setSearch('');
    window.scrollTo({ top: 0 });
    isOpenNav ? closeModal() : null;
  };

  return (
    <li>
      <Link to={'/blog'} className={className} onClick={handleClick}>
        {category}
      </Link>
    </li>
  );
};
