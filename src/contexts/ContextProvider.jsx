// src/contexts/ContextProvider.jsx
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
  } from 'react';
  
  const StateContext = createContext();
  
  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
  
  export const ContextProvider = ({ children }) => {
    /* ------------------- UI STATE ------------------- */
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [themeSettings, setThemeSettings] = useState(false);
  
    /* ------------------- THEME STATE ------------------- */
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
  
    /* ---------- 1. Initialise from localStorage / system ---------- */
    useEffect(() => {
      const savedMode = localStorage.getItem('themeMode');
      const savedColor = localStorage.getItem('colorMode');

      /* ----- mode ----- */
      if (savedMode === 'Light' || savedMode === 'Dark') {
        setCurrentMode(savedMode);
      } else {
        // No saved preference → respect OS
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setCurrentMode(prefersDark ? 'Dark' : 'Light');
      }
  
      /* ----- colour ----- */
      if (savedColor) setCurrentColor(savedColor);
    }, []);
  
    /* ---------- 2. Keep <html>.dark in sync with currentMode ---------- */
    useEffect(() => {
      const root = document.documentElement;
  
      if (currentMode === 'Dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }, [currentMode]);

    /* ------------------- THEME HANDLERS ------------------- */
    const setMode = useCallback((mode) => {
      setCurrentMode(mode);
      localStorage.setItem('themeMode', mode);
      setThemeSettings(false);
    }, []);
  
    const setColor = useCallback((color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
      setThemeSettings(false);
    }, []);

    /* ------------------- UI HELPERS ------------------- */
    const handleClick = (clicked) => {
      setIsClicked({ ...initialState, [clicked]: true });
    };

    return (
      <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isClicked,
          setIsClicked,
          handleClick,
          screenSize,
          setScreenSize,
  
          currentColor,
          currentMode,
          themeSettings,
          setThemeSettings,
  
          setMode,
          setColor,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);