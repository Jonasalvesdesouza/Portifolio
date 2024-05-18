import { useContext } from 'react';
import { UserAdmContext } from '../../../../../../providers';
import { MessageCard } from './MessageCard';

export const SectionDashboardMessage = () => {
  const { messageList } = useContext(UserAdmContext);

  return (
    <div>
      <h2>Message.</h2>
      <ul>
        {messageList?.map((message) => {
          return <MessageCard key={message.id} message={message} />;
        })}
      </ul>
    </div>
  );
};
