import { useContext, useState } from 'react';

import { TfiSearch } from 'react-icons/tfi';

import { Button } from '../../Button';
import { Input } from '../../InputDefault';
import { AppBehaviorContext } from '../../../../providers';

import styles from './styles.module.scss';

export const FormSearchArticles = () => {
  const { setSearch } = useContext(AppBehaviorContext);
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue('');
  };

  return (
    <form className={`${styles.searchContainer}`} onSubmit={submit}>
      <Button to={'/blog'}>
        <TfiSearch size={25} color="#848484" />
      </Button>

      <Input
        className={`${styles.searchInput} parapraph homeInput`}
        tyepe="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
