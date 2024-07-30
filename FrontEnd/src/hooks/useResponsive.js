import { useContext } from 'react';
import { smallResolution } from '../config';
import { AppBehaviorContext } from '../providers';

export const useResponsive = () => {
  const { screenWidth, screenHeight } = useContext(AppBehaviorContext);

  const isHeightHigh = screenWidth * 0.6 <= screenHeight;

  const test = isHeightHigh || screenWidth < smallResolution;

  return test;
};
