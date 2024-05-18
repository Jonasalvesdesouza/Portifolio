import React from 'react';
import { BiTrash } from 'react-icons/bi'
import { GrView } from "react-icons/gr"
import { Button } from '../../../../../../../fragments';

export const MessageButtons = (
    { 
        message, 
        setIsOpen, 
        setViewMessage, 
        messageMeDelete, 
        setLoading,
        loading 
    }
) => {
  const buttons = [
    {
      type: 'view',
      icon: <GrView size={18} color="black" />,
      action: () => {
        setIsOpen(true);
        setViewMessage(message);
      },
    },
    {
      type: 'delete',
      icon: loading ? "Loading..." : 
      <BiTrash size={18} color="black"/>,
      action: () => messageMeDelete(message.id, setLoading),
    },
  ];

  return (
    <div>
      {
        buttons.map((btn, index) => (
          <Button key={index} onClick={btn.action}>
            {btn.icon}
          </Button>
        ))
      }
    </div>
  );
};
