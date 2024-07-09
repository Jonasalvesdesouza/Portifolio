import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';

import { Button } from '../../Button';
import { Input } from '../../InputDefault';
import { AppBehaviorContext } from '../../../../providers';

import styles from './styles.module.scss';

export const FormSearchArticles = () => {
  const { setSearch } = useContext(AppBehaviorContext);
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

  return (
    <form
      className={`${styles.searchContainer} ${checkRouter ? styles.white : ''} `}
      onSubmit={submit}
    >
      <Button type="submit">
        <TfiSearch size={25} color={`${checkRouter ? '#ededf1' : `#848484`}`} />
      </Button>

      <Input
        className={`${styles.searchInput}`}
        tyepe="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
