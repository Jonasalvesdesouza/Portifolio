import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';

import { Button } from '../../Button';
import { Input } from '../../InputDefault';
import { AppBehaviorContext } from '../../../../providers';

import styles from './styles.module.scss';

export const FormSearchArticles = ({ isSticky }) => {
  const { setSearch, screenWidth } = useContext(AppBehaviorContext);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    setSearch(value);
    setValue('');
    navigate('/blog');
    window.scrollTo({ top: 0 });
  };

  const location = useLocation();
  const checkRouter = location.pathname === '/articlepage';
  const isResponsive = screenWidth <= 1024;

  return (
    <form
      className={
        isSticky || isResponsive
          ? styles.stickySearchContainer
          : styles.searchContainer
      }
      onSubmit={submit}
    >
      <Button className={isResponsive ? styles.button : ''} type="submit">
        <TfiSearch
          size={isSticky || isResponsive ? 18 : 25}
          color={checkRouter ? '#76787b' : '#848484'}
        />
      </Button>

      <Input
        className={isResponsive ? styles.input : styles.searchInput}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
