import { useContext, useState } from 'react';
import { Button } from '../../../fragments';
import { DashboardNav } from './DashboardNav';
import { AppBehaviorContext } from '../../../../providers';

import styles from './styles.module.scss';

export const SectionTopDashboard = () => {
	const { setIsOpenDashboard, focusBtnAdd, setFocusBtnAdd, navDashboard } =
		useContext(AppBehaviorContext);

	const handleClick = () => {
		setIsOpenDashboard(true);
		setFocusBtnAdd('ADD');
	};

	const classButton = `${styles.bntAdd} ${focusBtnAdd === 'ADD' ? styles.focussed : null}`;

	const ShowButton =
		navDashboard == 6 || navDashboard == null ? null : (
			<Button className={classButton} onClick={handleClick}>
				ADD
			</Button>
		);

	return (
		<div className={styles.sectionTopDashboardContainer}>
			<DashboardNav />
			<div>{ShowButton}</div>
		</div>
	);
};
