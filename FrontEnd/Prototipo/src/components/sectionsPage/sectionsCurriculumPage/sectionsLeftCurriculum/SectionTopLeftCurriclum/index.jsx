import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { useRenderImage } from '../../../../../hooks';

export const SectionTopLeftCurriclum = () => {
  const { profile } = useContext(UserAdmContext);

  const name = profile.userName?.toUpperCase();
  const profession = profile?.profession;

  const urlImage = useRenderImage(profile);

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>{profession}</p>
      </div>
      <div>
        <img src={urlImage} alt="Image Jonas" />
      </div>
    </div>
  );
};
