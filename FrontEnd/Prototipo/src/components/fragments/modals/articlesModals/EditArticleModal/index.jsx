import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormEditArticle } from '../../../forms';

export const EditArticleModal = ({ setIsOpen }) => {
  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpen(false);
  });

  const handleClick = () => {
    return setIsOpen(false);
  };

  return (
    <div role="dialog">
      <div>
        <Button onClick={handleClick}>
          <IoCloseOutline size={28} color="#1b1f24" />
        </Button>
      </div>
      <div>
        <FormEditArticle setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
