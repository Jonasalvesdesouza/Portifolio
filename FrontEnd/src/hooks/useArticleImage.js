import { useEffect, useState } from 'react';
import ImageDefault from '../assets/DefaultImage.ai.svg';
import { ConfigServerUrl } from '../config';

export const useArticleImage = (article) => {
  const [articleImage, setArticleImage] = useState('');

  useEffect(() => {
    const imageRender = () => {
      if (!article.image) {
        return ImageDefault;
      } else {
        const imagePath = article.image.path;
        const imageName = imagePath?.substring(imagePath.lastIndexOf('/') + 1);
        const serverUrl = ConfigServerUrl;
        return `${serverUrl}/uploads/${imageName?.replace(/\s/g, '%20')}`;
      }
    };

    const imageUrl = imageRender();
    setArticleImage(imageUrl);
  }, [article]);

  return articleImage;
};
