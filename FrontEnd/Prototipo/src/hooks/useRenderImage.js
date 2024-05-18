import ImageDefault from '../assets/DefaultImage.ai.svg';

import { ConfigServerUrl } from '../config';

export const useRenderImage = (object) => {
  if (!object.image) {
    const imageUrl = ImageDefault;

    return imageUrl;
  } else {
    const imagePath = object.image.path;
    const imageName = imagePath?.substring(imagePath.lastIndexOf('/') + 1);
    const serverUrl = ConfigServerUrl;
    const imageUrl = `${serverUrl}/uploads/${imageName?.replace(/\s/g, '%20')}`;

    return imageUrl;
  }
};
