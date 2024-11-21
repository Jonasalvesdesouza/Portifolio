import { useContext } from 'react';
import { UserAdmContext } from '../../../../../providers';
import { useRenderImage, useFormattedName } from '../../../../../hooks';

import styles from './styles.module.scss';

export const SectionTopLeftCurriclum = () => {
  const { profile } = useContext(UserAdmContext);

  const name = useFormattedName(profile?.userName);
  const profession = profile?.profession;

  const urlImage = useRenderImage(profile);

  return (
    <div className={`${styles.topLeftContainer}`}>
      <div className={`${styles.topLeftHeader}`}>
        <h1 className="title1 white">{name}</h1>
        <p className="title2 curriculum">{profession}</p>
      </div>
      <div className={`${styles.imgContainer}`}>
        <img src={urlImage} alt="Image Jonas" />
      </div>
    </div>
  );
};
