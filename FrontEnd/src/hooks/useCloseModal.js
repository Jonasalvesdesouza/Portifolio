import { useKeydown, useOutclick } from './index';

export const useCloseModal = (setIsOpenInsertImage) => {
	const closeModalOutClick = useOutclick(() => {
		setIsOpenInsertImage(false);
	});

	const closeModalKeyDownEsque = useKeydown(() => {
		setIsOpenInsertImage(false);
	});

	return { closeModalOutClick, closeModalKeyDownEsque };
};
