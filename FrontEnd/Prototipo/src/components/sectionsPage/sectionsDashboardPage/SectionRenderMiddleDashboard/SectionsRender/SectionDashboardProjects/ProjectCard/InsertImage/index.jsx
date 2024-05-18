import { CiImageOn } from 'react-icons/ci';
import { LuImagePlus } from 'react-icons/lu';

import { Button } from '../../../../../../../fragments';

export const InsertImage = ({
  project,
  setIsopenUpdateImage,
  setIsOpenInsertImage,
  setProject,
  projectImage,
  setImageProject,
}) => {
  const handleInsertImage = () => {
    setIsOpenInsertImage(true);
    setImageProject(null);
    setProject(project);
  };

  const handleUpdateImage = () => {
    setIsopenUpdateImage(true);
    setProject(project);
  };

  return (
    <div>
      <div>
        <img src={projectImage} alt={`${project.title}`} />
      </div>
      <div>
        <Button
          onClick={
            projectImage != '/src/assets/DefaultImage.ai.svg'
              ? handleUpdateImage
              : projectImage === '/src/assets/DefaultImage.ai.svg'
                ? handleInsertImage
                : null
          }
        >
          {projectImage != '/src/assets/DefaultImage.ai.svg' ? (
            <CiImageOn size={28} color="black" />
          ) : (
            <LuImagePlus size={28} color="black" />
          )}
        </Button>
      </div>
    </div>
  );
};
