import { useLocation } from 'react-router-dom';

export const useColorHamburgerBar = (useResponsive) => {
  const location = useLocation();
  const homepage = location.pathname === '/';
  const articlepage = location.pathname === '/articlepage';

  if ((homepage && useResponsive()) || articlepage) {
    return true;
  } else {
    return false;
  }
};
