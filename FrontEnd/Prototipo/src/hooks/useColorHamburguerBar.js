import { useLocation } from 'react-router-dom';

export const useColorHamburgerBar = (useResponsive) => {
  const location = useLocation();
  const router = location.pathname === '/';

  if (router && useResponsive()) {
    return true;
  } else {
    return false;
  }
};
