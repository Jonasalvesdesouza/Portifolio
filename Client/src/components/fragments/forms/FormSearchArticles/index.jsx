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
  const [isFocused, setIsFocused] = useState(false);
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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const location = useLocation();
  const checkRouter = location.pathname === '/articlepage';
  const isResponsive = screenWidth <= 1024;

  const classForm = `${isSticky || isResponsive ? styles.stickySearchContainer : styles.searchContainer} ${isFocused && checkRouter ? styles.focusedWhite : ''}`;
  const iconColor = isFocused
    ? checkRouter
      ? '#ededf1'
      : '#848484'
    : checkRouter
      ? '#76787b'
      : '#848484';

  return (
    <form className={classForm} onSubmit={submit}>
      <Button className={isResponsive ? styles.button : ''} type="submit">
        <TfiSearch
          className={styles.searchIcon}
          size={isSticky || isResponsive ? 18 : 25}
          color={iconColor}
        />
      </Button>

      <Input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
