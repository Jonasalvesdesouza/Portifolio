import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBehaviorContext } from '../../../../../../providers';

import styles from '../styles.module.scss';

export const CardFilter = ({ category, className, setFocusedButton }) => {
  const { setCategorysArticles, setSearch } = useContext(AppBehaviorContext);

  const handleClick = () => {
    setCategorysArticles(category);
    setFocusedButton(category);
    setSearch('');
  };

  return (
    <li>
      <Link to={'/blog'} className={className} onClick={handleClick}>
        {category}
      </Link>
    </li>
  );
};
