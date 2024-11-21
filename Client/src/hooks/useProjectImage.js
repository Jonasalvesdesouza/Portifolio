import { useEffect, useState } from 'react';
import ImageDefault from '../assets/DefaultImage.ai.svg';
import { ConfigServerUrl } from '../config';

export const useProjectImage = (project) => {
  const [projectImage, setProjectImage] = useState('');

  useEffect(() => {
    const imageRender = () => {
      if (!project.image) {
        return ImageDefault;
      } else {
        const imagePath = project.image.path;
        const imageName = imagePath?.substring(imagePath.lastIndexOf('/') + 1);
        return `${ConfigServerUrl}/uploads/${imageName?.replace(/\s/g, '%20')}`;
      }
    };

    const imageUrl = imageRender();
    setProjectImage(imageUrl);
  }, [project]);

  return projectImage;
};
