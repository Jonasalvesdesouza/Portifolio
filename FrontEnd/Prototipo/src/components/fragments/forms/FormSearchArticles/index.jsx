import { useContext, useState } from 'react';

import { TfiSearch } from 'react-icons/tfi';

import { Button } from '../../Button';
import { Input } from '../../InputDefault';
import { AppBehaviorContext } from '../../../../providers';

export const FormSearchArticles = () => {
  const { setSearch } = useContext(AppBehaviorContext);
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Button to={'/blog'}>
          <TfiSearch size={25} color="#848484" />
        </Button>

        <Input
          tyepe="text"
          placeholder="Type here what you want to find..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};
