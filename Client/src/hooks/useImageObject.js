import { useEffect, useState } from 'react';
import ImageDefault from '../assets/DefaultImage.ai.svg';
import { ConfigServerUrl } from '../config';

export const useImageObject = (object) => {
	const [objectImage, setObjectImage] = useState('');

	useEffect(() => {
		const imageRender = () => {
			if (!object.image) {
				return ImageDefault;
			} else {
				const imagePath = object.image.path;
				const imageName = imagePath?.substring(imagePath.lastIndexOf('/') + 1);
				const serverUrl = ConfigServerUrl;
				return `${serverUrl}/uploads/${imageName?.replace(/\s/g, '%20')}`;
			}
		};

		const imageUrl = imageRender();
		setObjectImage(imageUrl);
	}, [object]);

	return objectImage;
};
