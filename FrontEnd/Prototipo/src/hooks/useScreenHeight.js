import { useContext, useEffect } from 'react';
import { AppBehaviorContext } from '../providers';

export const useScreenHeight = () => {
  const { setScreenHeight } = useContext(AppBehaviorContext);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Capture initial height
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setScreenHeight]);

  return null;
};
