import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick, useRenderImage } from '../../../../../hooks';

import { Button } from '../../../Button';
import { FormUpdateProjectImage } from '../../../forms';
import { useContext, useEffect, useState } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

export const ImageUpdateProjectModal = ({ setIsopenUpdateImage, project }) => {
  const { imageProject } = useContext(AppBehaviorContext);
  const [projectImage, setProjectImage] = useState('');

  const closeModalOutClick = useOutclick(() => {
    setIsopenUpdateImage(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsopenUpdateImage(false);
  });

  useEffect(() => {
    if (imageProject) {
      setProjectImage(imageProject);
    } else {
      const urlImage = useRenderImage(project);
      setProjectImage(urlImage);
    }
  }, [project, imageProject]);

  const handleClick = () => {
    setIsopenUpdateImage(false);
  };

  return (
    <div role="dialog" ref={closeModalOutClick}>
      <div>
        <Button onClick={handleClick}>
          <IoCloseOutline size={28} color="#1b1f24" />
        </Button>
      </div>
      <div>
        <img
          src={projectImage}
          alt="Preview"
          style={{ maxWidth: '100%', marginTop: '10px' }}
        />
      </div>
      <div>
        <FormUpdateProjectImage setIsopenUpdateImage={setIsopenUpdateImage} />
      </div>
    </div>
  );
};
