import React from 'react';
import { BiPencil, BiTrash } from 'react-icons/bi'; 
import { Button } from '../../../../../../../fragments';

export const HobbyButtons = (
    { 
        hobby, 
        setIsOpen, 
        setEditHobby, 
        hobbyDelete, 
        setLoading,
        loading 
    }
) => {
  const buttons = [
    {
      type: 'edit',
      icon: <BiPencil size={18} color="black" />,
      action: () => {
        setIsOpen(true);
        setEditHobby(hobby);
      },
    },
    {
      type: 'delete',
      icon: loading ? "Loading..." : 
      <BiTrash size={18} color="black"/>,
      action: () => hobbyDelete(hobby.id, setLoading),
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
