import { BiPencil, BiTrash } from 'react-icons/bi';
import { ColorRing } from 'react-loader-spinner';


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
    icon: loading ? <ColorRing
    visible={true}
    height="30"
    width="30"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e3b200', '#e3b200', '#e3b200', '#e3b200', '#e3b200']}
    />  : <BiPencil />,
    action: () => {
      setIsOpen(true);
      setEditArticles(article);
    },
  },
  {
    type: 'delete',
    icon: loading ? <ColorRing
    visible={true}
    height="30"
    width="30"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e3b200', '#e3b200', '#e3b200', '#e3b200', '#e3b200']}
    />  : <BiTrash />,
    action: () => articleDelete(article.id, setLoading),
  },
];
