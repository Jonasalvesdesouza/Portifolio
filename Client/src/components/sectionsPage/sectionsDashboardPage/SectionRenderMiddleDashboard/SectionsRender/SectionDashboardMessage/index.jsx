import { useContext } from 'react';
import { UserAdmContext } from '../../../../../../providers';
import { MessageCard } from './MessageCard';

import styles from './styles.module.scss';

export const SectionDashboardMessage = () => {
	const { messageList } = useContext(UserAdmContext);

	return (
		<div className={styles.educationContainer}>
			<h2>Message.</h2>
			<ul>
				{messageList?.map((message) => {
					return <MessageCard key={message.id} message={message} />;
				})}
			</ul>
		</div>
	);
};
