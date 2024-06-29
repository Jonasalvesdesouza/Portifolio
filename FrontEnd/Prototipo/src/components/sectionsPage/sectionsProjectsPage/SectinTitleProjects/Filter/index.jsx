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

  console.log('focusedButton: ', focusedButton);

  return (
    <ul className={`${styles.filterContainer}`}>
      <li key="emphasis">
        <Button
          /* className={`${styles.button}`} */
          className={`${styles.button} ${focusedButton === 'Emphasis' ? styles.focused : ''}`}
          onClick={handleClick}
        >
          Emphasis
        </Button>
      </li>

      {categorysData?.map((category) => {
        return (
          <li key={category}>
            <Button
              /* className={`${styles.button}`} */
              className={`${styles.button} ${focusedButton === category ? styles.focused : ''}`}
              onClick={() => handleClick2(category)}
            >
              {category}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
