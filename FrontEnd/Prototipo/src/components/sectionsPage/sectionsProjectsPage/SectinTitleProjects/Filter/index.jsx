import { useContext, useState } from 'react';
import { AppBehaviorContext } from '../../../../../providers';
import { useCategoryProjectsData } from '../../../../../hooks';
import { Button } from '../../../../fragments';

import styles from './styles.module.scss';

export const FilterProjects = () => {
  const { resetStadeCategorys, setCategorysProject } =
    useContext(AppBehaviorContext);

  const [focusedButton, setFocusedButton] = useState('Emphasis');

  const categorysData = useCategoryProjectsData();

  const handleClick = () => {
    setFocusedButton('Emphasis');
    resetStadeCategorys('');
  };

  const handleClick2 = (category) => {
    setCategorysProject(category);
    setFocusedButton(category);
  };

  return (
    <ul className={`${styles.filterContainer}`}>
      <li key="emphasis">
        <a
          className={`${styles.button} ${focusedButton === 'Emphasis' ? styles.focused : ''}`}
          onClick={handleClick}
        >
          Emphasis
        </a>
      </li>

      {categorysData?.map((category) => {
        return (
          <li key={category}>
            <a
              className={`${styles.button} ${focusedButton === category ? styles.focused : ''}`}
              onClick={() => handleClick2(category)}
            >
              {category}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
