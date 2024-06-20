import { useContext, useEffect, useState } from 'react';
import { Button } from '../Button';
import { AppBehaviorContext } from '../../../providers/ApplicationBehaviorContext';

import styles from './styles.module.scss';

export const NavHomePage = () => {
  const { setCurrentCard, currentCard } = useContext(AppBehaviorContext);
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    setActiveButton(currentCard);
  }, [currentCard]);

  const buttons = [
    { label: 'Home', index: 0 },
    { label: 'About', index: 1 },
    { label: 'Workplace', index: 2 },
    { label: 'Contact', index: 3 },
  ];

  const handleClick = (index) => {
    console.log('CLICOU');
    return setCurrentCard(index);
  };

  return (
    <div className={`${styles.container}`}>
      <nav>
        <ul>
          {buttons.map((button) => (
            <li className={`${styles.buttonContainer}`} key={button.index}>
              <Button
                className={
                  button.index === activeButton ? styles.activeButton : ``
                }
                onClick={() => handleClick(button.index)}
              >
                <span className={`${styles.label}`}>{button.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
