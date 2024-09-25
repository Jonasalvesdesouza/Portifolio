import { useEffect } from 'react';

export const useBodyOverflowToggle = (isModalOpen) => {
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isModalOpen]);
};
