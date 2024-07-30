import { useContext } from 'react';
import {
  AppBehaviorContext,
  UserAdmContext,
} from '../../../../../../providers';
import { HobbyCard } from './HobbyCard';
import { InsertHobbyModal } from '../../../../../fragments';

export const SectionDashboardHobby = () => {
  const { hobbyList } = useContext(UserAdmContext);

  const { isOpenDashboard, setIsOpenDashboard } =
    useContext(AppBehaviorContext);

  return (
    <>
      <div>
        <h2>Hobby.</h2>
        <ul>
          {hobbyList?.map((hobby) => {
            return <HobbyCard key={hobby.id} hobby={hobby} />;
          })}
        </ul>
      </div>
      {isOpenDashboard === true ? (
        <InsertHobbyModal setIsOpenDashboard={setIsOpenDashboard} />
      ) : null}
    </>
  );
};
