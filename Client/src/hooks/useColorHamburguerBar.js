import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useColorHamburgerBar = (useResponsive) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [testCurriculumEndResponsive, setTestCurriculumEndResponsive] =
    useState(false);

  const location = useLocation();
  const homepage = location.pathname === '/';
  const articlepage = location.pathname === '/articlepage';

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const isCurriculumResponsive =
      location.pathname === '/curriculum' && windowWidth <= 1024;
    setTestCurriculumEndResponsive(isCurriculumResponsive);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname, windowWidth]);

  if (
    (homepage && useResponsive()) ||
    articlepage ||
    testCurriculumEndResponsive
  ) {
    return true;
  } else {
    return false;
  }
};
