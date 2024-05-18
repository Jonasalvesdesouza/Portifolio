import { useContext, useEffect } from 'react';
import { AppBehaviorContext } from '../providers';

export const useScreenWidth = () => {
  const { setScreenWidth } = useContext(AppBehaviorContext);

  const captureValue = useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return captureValue;
};
