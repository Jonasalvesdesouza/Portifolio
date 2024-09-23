import { BiPencil, BiTrash } from 'react-icons/bi';

export const buttonsConfig = (
  project,
  setIsOpen,
  setEditProjects,
  projectDelete,
  setLoading,
  loading,
) => [
  {
    type: 'edit',
    icon: <BiPencil />,
    action: () => {
      setIsOpen(true);
      setEditProjects(project);
    },
  },
  {
    type: 'delete',
    icon: loading ? 'Loading...' : <BiTrash />,
    action: () => projectDelete(project.id, setLoading),
  },
];
