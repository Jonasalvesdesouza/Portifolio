import { useContext, useState } from 'react';
import { AppBehaviorContext } from '../../../../providers';
import { useCategoryProjectsData } from '../../../../hooks';

import styles from './styles.module.scss';

export const FilterProjects = ({ isSticky, closeModal }) => {
  const {
    resetStadeCategorys,
    setCategorysProject,
    isOpenNav,
    focusedButton,
    setFocusedButton,
  } = useContext(AppBehaviorContext);

  const categorysData = useCategoryProjectsData();

  const handleClick = () => {
    setFocusedButton('Emphasis');
    resetStadeCategorys('');
    isOpenNav ? closeModal() : null;
  };

  const handleClick2 = (category) => {
    setCategorysProject(category);
    setFocusedButton(category);
    isOpenNav ? closeModal() : null;
  };

  const filterClass = `${isSticky ? styles.stickyContainer : styles.filterContainer} `;

  return (
    <div className={filterClass}>
      <ul>
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
    </div>
  );
};
