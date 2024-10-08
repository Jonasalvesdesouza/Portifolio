import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const AppBehaviorContext = createContext({});

export const AppBehaviorProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const [currentCard, setCurrentCard] = useState(0);

  const location = useLocation().pathname.toLocaleLowerCase();
  const [routeLocation, setRouteLocation] = useState('');

  const [search, setSearch] = useState('');
  const [categorysProject, setCategorysProject] = useState('');
  const [categorysArticles, setCategorysArticles] = useState('');
  const [focusedButton, setFocusedButton] = useState('Emphasis');
  const [focusBtnAdd, setFocusBtnAdd] = useState('');
  const [focussed, setFocussed] = useState('');

  const [navDashboard, setNavDashboard] = useState(null);

  const [isOpenDashboard, setIsOpenDashboard] = useState(false);
  const [stateImage, setStateImage] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [returShapeHam, setReturShapeHam] = useState(false);

  const [imageProfile, setImageProfile] = useState('');
  const [imageProject, setImageProject] = useState('');
  const [imageArticle, setImageArticle] = useState('');

  const resetStadeCategorys = () => {
    setCategorysArticles('');
    setCategorysProject('');
  };

  return (
    <AppBehaviorContext.Provider
      value={{
        screenWidth,
        setScreenWidth,
        screenHeight,
        setScreenHeight,
        currentCard,
        setCurrentCard,
        location,
        routeLocation,
        setRouteLocation,
        search,
        setSearch,
        categorysProject,
        setCategorysProject,
        categorysArticles,
        setCategorysArticles,
        resetStadeCategorys,
        navDashboard,
        setNavDashboard,
        isOpenDashboard,
        setIsOpenDashboard,
        stateImage,
        setStateImage,
        imageProfile,
        setImageProfile,
        imageProject,
        setImageProject,
        imageArticle,
        setImageArticle,
        returShapeHam,
        setReturShapeHam,
        focusedButton,
        setFocusedButton,
        focusBtnAdd,
        setFocusBtnAdd,
        focussed,
        setFocussed,
        isOpenNav,
        setIsOpenNav,
      }}
    >
      {children}
    </AppBehaviorContext.Provider>
  );
};
