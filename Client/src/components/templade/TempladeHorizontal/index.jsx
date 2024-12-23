import { useContext } from 'react';
import { AppBehaviorContext } from '../../../providers';
import { Button, Footer, Header, NavHomePage } from '../../fragments';
import styles from './styles.module.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const TempladeHorizontal = ({ children }) => {
	const { currentCard, setCurrentCard } = useContext(AppBehaviorContext);

	const handleClick = () => {
		setCurrentCard(currentCard === 3 ? 0 : currentCard + 1);
	};

	return (
		<>
			<div className={styles.templadeHorizontalContainer}>
				<Header />
				<div className={styles.container}>
					<div className={styles.leftSideContainer}>
						<NavHomePage />
						<Footer />
					</div>
					<main className={styles.mainContainer}>{children}</main>
					<div className={styles.button}>
						<Button id="button" onClick={handleClick}>
							{currentCard === 3 ? (
								<IoIosArrowUp className={styles.arrowIcon} />
							) : (
								<IoIosArrowDown className={styles.arrowIcon} />
							)}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};
