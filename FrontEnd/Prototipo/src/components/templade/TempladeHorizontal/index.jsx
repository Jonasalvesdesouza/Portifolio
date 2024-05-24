import { useContext } from 'react';
import { AppBehaviorContext } from '../../../providers';
import { Button, Footer, Header, NavHomePage } from '../../fragments';

import styles from './styles.module.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const TempladeHorizontal = ({ children, setIsOpen }) => {
  const { currentCard, setCurrentCard } = useContext(AppBehaviorContext);

  const handleClick = () => {
    if (currentCard === 3) {
      return setCurrentCard(0);
    } else {
    }
    setCurrentCard(currentCard + 1);
  };
  return (
    <div className={`${styles.templateDefaultContainer}`}>
      <Header setIsOpen={setIsOpen} />

      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.leftSideContainer}`}>
          <NavHomePage />
          <Footer />
        </div>
        <main>{children}</main>
        <div className={`${styles.button}`}>
          <Button id="button" onClick={handleClick}>
            {currentCard === 3 ? (
              <IoIosArrowUp className="arrowIcon" />
            ) : (
              <IoIosArrowDown className="arrowIcon" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
