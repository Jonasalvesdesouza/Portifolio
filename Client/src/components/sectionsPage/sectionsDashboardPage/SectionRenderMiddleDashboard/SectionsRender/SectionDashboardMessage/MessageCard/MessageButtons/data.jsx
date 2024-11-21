import { BiTrash } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';

import { ColorRing } from 'react-loader-spinner';

export const buttonsConfig = (
	message,
	setIsOpen,
	setViewMessage,
	messageMeDelete,
	setLoading,
	loading,
) => [
	{
		type: 'view',
		icon:
			loading === true ? (
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
				<GrView />
			),
		action: () => {
			setIsOpen(true);
			setViewMessage(message);
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
		action: () => messageMeDelete(message.id, setLoading),
	},
];
