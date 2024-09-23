import { BiPencil, BiTrash } from 'react-icons/bi';

export const buttonsConfig = (
  article,
  setIsOpen,
  setEditArticles,
  articleDelete,
  loading,
  setLoading,
) => [
  {
    type: 'edit',
    icon: <BiPencil />,
    action: () => {
      setIsOpen(true);
      setEditArticles(article);
    },
  },
  {
    type: 'delete',
    icon: loading ? 'Loading...' : <BiTrash />,
    action: () => articleDelete(article.id, setLoading),
  },
];
