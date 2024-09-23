import React from 'react';

import { BiPencil, BiTrash } from 'react-icons/bi';
import { Button } from '../../../../../../../fragments';

import styles from './styles.module.scss';
import { buttonsConfig } from './data';

export const ButtonsArticleCard = ({
  article,
  setIsOpen,
  setEditArticles,
  articleDelete,
  loading,
  setLoading,
}) => {
  const buttons = buttonsConfig(
    article,
    setIsOpen,
    setEditArticles,
    articleDelete,
    loading,
    setLoading,
  );

  return (
    <div className={styles.btnsArticles}>
      {buttons.map((btn, index) => (
        <Button key={index} onClick={btn.action}>
          {btn.icon}
        </Button>
      ))}
    </div>
  );
};
