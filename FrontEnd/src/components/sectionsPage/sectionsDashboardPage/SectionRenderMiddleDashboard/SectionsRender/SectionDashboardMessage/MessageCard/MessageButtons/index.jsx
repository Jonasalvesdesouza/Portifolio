import { buttonsConfig } from './data';

import { Button } from '../../../../../../../fragments';

import styles from './styles.module.scss';

export const MessageButtons = ({
	message,
	setIsOpen,
	setViewMessage,
	messageMeDelete,
	setLoading,
	loading,
}) => {
	const buttons = buttonsConfig(
		message,
		setIsOpen,
		setViewMessage,
		messageMeDelete,
		setLoading,
		loading,
	);

	return (
		<div className={styles.btnContainer}>
			{buttons.map((btn, index) => (
				<Button key={index} onClick={btn.action}>
					{btn.icon}
				</Button>
			))}
		</div>
	);
};
