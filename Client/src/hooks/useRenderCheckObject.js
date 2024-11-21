import { useEffect, useState } from 'react';

export const useRenderCheckObject = (object) => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (object) {
			setLoading(false);
		}
	}, [object]);

	return isLoading;
};
