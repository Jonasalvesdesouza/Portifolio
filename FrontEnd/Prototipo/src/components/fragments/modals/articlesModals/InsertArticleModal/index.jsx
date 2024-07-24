import { IoCloseOutline } from 'react-icons/io5';

import { useKeydown } from '../../../../../hooks';
import { Button } from '../../../Button';
import { FormInsertArticle } from '../../../forms';

export const InsertArticleModal = ({ setIsOpenDashboard }) => {
  const closeModalKeyDownEsque = useKeydown(() => {
    setIsOpenDashboard(false);
  });

  const handleClick = () => {
    return setIsOpenDashboard(false);
  };

  return (
    <div role="dialog">
      <div>
        <Button onClick={handleClick}>
          <IoCloseOutline size={28} color="#1b1f24" />
        </Button>
      </div>
      <div>
        <FormInsertArticle setIsOpenDashboard={setIsOpenDashboard} />
      </div>
    </div>
  );
};
