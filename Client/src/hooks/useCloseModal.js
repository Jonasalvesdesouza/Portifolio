import { useContext } from 'react';
import { useKeydown, useOutclick } from './index';
import { AppBehaviorContext } from '../providers';

export const useCloseModal = (setIsOpenInsertImage) => {
	const { setFocusBtnAdd } = useContext(AppBehaviorContext);

	const closeModalOutClick = useOutclick(() => {
		setIsOpenInsertImage(false);
		setFocusBtnAdd('');
	});

	const closeModalKeyDownEsque = useKeydown(() => {
		setIsOpenInsertImage(false);
		setFocusBtnAdd('');
	});

	return { closeModalOutClick, closeModalKeyDownEsque };
};
