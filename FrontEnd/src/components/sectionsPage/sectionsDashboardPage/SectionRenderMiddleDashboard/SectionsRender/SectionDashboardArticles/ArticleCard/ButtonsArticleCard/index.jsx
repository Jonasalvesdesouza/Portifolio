import React from 'react';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { Button } from '../../../../../../../fragments';

export const ButtonsArticleCard = ({
  article,
  setIsOpen,
  setEditArticles,
  articleDelete,
  loading,
  setLoading,
}) => {
  const buttons = [
    {
      type: 'edit',
      icon: <BiPencil size={18} color="black" />,
      action: () => {
        setIsOpen(true);
        setEditArticles(article);
      },
    },
    {
      type: 'delete',
      icon: loading ? (
        'Loading...'
      ) : (
        <BiTrash size={18} color="black" /* color="#e8e9ea" */ />
      ),
      action: () => articleDelete(article.id, setLoading),
    },
  ];

  return (
    <div>
      {buttons.map((btn, index) => (
        <Button key={index} onClick={btn.action}>
          {btn.icon}
        </Button>
      ))}
    </div>
  );
};
