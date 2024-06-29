import { useContext } from 'react';
import { AppBehaviorContext } from '../../../../../providers';
import { useCategoryProjectsData } from '../../../../../hooks';
import { Button } from '../../../../fragments';

import styles from './styles.module.scss';

export const FilterProjects = () => {
  const { resetStadeCategorys, setCategorysProject } =
    useContext(AppBehaviorContext);
  const categorysData = useCategoryProjectsData();

  return (
    <ul className={`${styles.filterContainer}`}>
      <li key="emphasis">
        <Button
          className={`${styles.button}`}
          onClick={() => resetStadeCategorys()}
        >
          Emphasis
        </Button>
      </li>

      {categorysData?.map((category) => {
        return (
          <li key={category}>
            <Button
              className={`${styles.button}`}
              onClick={() => setCategorysProject(category)}
            >
              {category}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
