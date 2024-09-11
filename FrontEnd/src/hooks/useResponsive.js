import { useContext } from 'react';
import { AppBehaviorContext } from '../providers';

export const useResponsive = () => {
  const { screenWidth, screenHeight } = useContext(AppBehaviorContext);
  const smallResolution = 1050;

  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  const test = isHeightHigh || screenWidth < smallResolution;

  return test;
};
