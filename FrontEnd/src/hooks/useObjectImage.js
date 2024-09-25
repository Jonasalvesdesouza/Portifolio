import { useEffect, useState } from 'react';

import { ConfigServerUrl } from '../config';
import ImageDefault from '../assets/DefaultImage.ai.svg';

export const useObjectImage = (object) => {
	const [objectImage, setObjectImage] = useState('');

	useEffect(() => {
		const imageRender = () => {
			if (!object.image) {
				return ImageDefault;
			} else {
				const imagePath = object.image.path;
				const imageName = imagePath?.substring(imagePath.lastIndexOf('/') + 1);
				return `${ConfigServerUrl}/uploads/${imageName?.replace(/\s/g, '%20')}`;
			}
		};

		const imageUrl = imageRender();
		setObjectImage(imageUrl);
	}, [object]);

	return objectImage;
};
