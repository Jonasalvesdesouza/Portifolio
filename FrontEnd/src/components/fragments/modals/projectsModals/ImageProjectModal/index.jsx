import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown, useOutclick, useRenderImage } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormProjectImage } from '../../../forms';
import { useContext, useEffect, useState } from 'react';
import { AppBehaviorContext } from '../../../../../providers';

export const ImageProjectModal = ({ project, setIsOpenInsertImage }) => {
  const { imageProject } = useContext(AppBehaviorContext);
  const [projectImage, setProjectImage] = useState('');

  const closeModalOutClick = useOutclick(() => {
    setIsOpenInsertImage(false);
  });

  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpenInsertImage(false);
  });

  const handleClick = () => {
    setIsOpenInsertImage(false);
    setProjectImage('');
  };

  useEffect(() => {
    if (imageProject) {
      setProjectImage(imageProject);
    } else {
      const urlImage = useRenderImage(project);
      setProjectImage(urlImage);
    }
  }, [project, imageProject]);

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
          style={{ maxWidth: '50%', marginTop: '10px' }}
        />
      </div>
      <div>
        <FormProjectImage setIsOpenInsertImage={setIsOpenInsertImage} />
      </div>
    </div>
  );
};
