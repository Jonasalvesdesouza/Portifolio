import React from 'react';
import { BiPencil, BiTrash } from 'react-icons/bi'; 
import { Button } from '../../../../../../../fragments';

export const SkillButtons = (
    { 
        skill, 
        setIsOpen, 
        setEditSkill, 
        skillDelete, 
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
        setEditSkill(skill);
      },
    },
    {
      type: 'delete',
      icon: loading ? "Loading..." : 
      <BiTrash size={18} color="black"/>,
      action: () => skillDelete(skill.id, setLoading),
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
