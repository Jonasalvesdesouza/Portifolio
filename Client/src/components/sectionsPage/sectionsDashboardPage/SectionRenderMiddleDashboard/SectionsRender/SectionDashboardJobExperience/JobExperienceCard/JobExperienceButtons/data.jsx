import { BiPencil, BiTrash } from 'react-icons/bi';
import { ColorRing } from 'react-loader-spinner';

export const buttonsConfig = (
	jobExperience,
	setIsOpen,
	setEditJobExperience,
	jobExperienceDelete,
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
			setEditJobExperience(jobExperience);
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
		action: () => jobExperienceDelete(jobExperience.id, setLoading),
	},
];
