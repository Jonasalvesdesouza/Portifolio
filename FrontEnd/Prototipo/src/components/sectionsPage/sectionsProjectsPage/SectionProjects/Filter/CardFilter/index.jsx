import { useContext } from 'react';
import { Button } from '../../../../../fragments';
import { AppBehaviorContext } from '../../../../../../providers';

export const CardFilter = ({ category }) => {
  const { setCategorysProject } = useContext(AppBehaviorContext);

  return (
    <li>
      <Button onClick={() => setCategorysProject(category)}>{category}</Button>
    </li>
  );
};
