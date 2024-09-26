import { useContext, useState } from 'react';
import { MessageButtons } from './MessageButtons';
import { UserAdmContext } from '../../../../../../../providers';
import { ViewMessageModal } from '../../../../../../fragments';

import styles from './styles.module.scss';

export const MessageCard = ({ message }) => {
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { setViewMessage, messageMeDelete } = useContext(UserAdmContext);

	return (
		<>
			<li className={`${styles.cardMessageContainer}`}>
				<span>{message.name}</span>

				<MessageButtons
					message={message}
					setIsOpen={setIsOpen}
					setViewMessage={setViewMessage}
					messageMeDelete={messageMeDelete}
					setLoading={setLoading}
					loading={loading}
				/>
			</li>
			{isOpen === true ? <ViewMessageModal setIsOpen={setIsOpen} /> : null}
		</>
	);
};
