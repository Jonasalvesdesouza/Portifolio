import { useContext, useState } from 'react';
import { SocialMediaButtons } from './SocialMediaButtons';
import { UserAdmContext } from '../../../../../../../providers';
import { EditSocialMediaModal } from '../../../../../../fragments';

export const SocialMediaCard = ({ socialMedia }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { setEditSocialMedia, socialMediaDelete } = useContext(UserAdmContext);

  return (
    <>
      <li>
        <div>
          <span>{socialMedia.name}</span>

          <SocialMediaButtons
            socialMedia={socialMedia}
            setIsOpen={setIsOpen}
            setEditSocialMedia={setEditSocialMedia}
            socialMediaDelete={socialMediaDelete}
            setLoading={setLoading}
            loading={loading}
          />
        </div>
      </li>
      {isOpen === true ? <EditSocialMediaModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};
