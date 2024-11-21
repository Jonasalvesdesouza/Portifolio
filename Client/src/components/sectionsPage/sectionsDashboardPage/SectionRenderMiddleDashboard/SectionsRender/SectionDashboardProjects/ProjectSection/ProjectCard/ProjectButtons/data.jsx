import { BiPencil, BiTrash } from 'react-icons/bi';
import { ColorRing } from 'react-loader-spinner';

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
		icon:
			loading === 'edit' ? (
				<ColorRing
					visible={true}
					height="30"
					width="30"
					ariaLabel="color-ring-loading"
					wrapperStyle={{}}
					wrapperClass="color-ring-wrapper"
					colors={['#e3b200', '#e3b200', '#e3b200', '#e3b200', '#e3b200']}
				/>
			) : (
				<BiPencil />
			),
		action: () => {
			setIsOpen(true);
			setEditProjects(project);
		},
	},
	{
		type: 'delete',
		icon:
			loading === 'delete' ? (
				<ColorRing
					visible={true}
					height="30"
					width="30"
					ariaLabel="color-ring-loading"
					wrapperStyle={{}}
					wrapperClass="color-ring-wrapper"
					colors={['#e3b200', '#e3b200', '#e3b200', '#e3b200', '#e3b200']}
				/>
			) : (
				<BiTrash />
			),
		action: () => projectDelete(project.id, setLoading),
	},
];
