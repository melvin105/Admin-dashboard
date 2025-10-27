import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};


export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    useEffect(() => {
        const currentThemeMode = localStorage.getItem('themeMode');
        const currentThemeColor = localStorage.getItem('colorMode');

        if (currentThemeMode) {
            setCurrentMode(currentThemeMode);
            // Apply dark class to document element
            if (currentThemeMode === 'Dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            // Check system preference if no saved preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                setCurrentMode('Dark');
                document.documentElement.classList.add('dark');
            }
        }
        
        if (currentThemeColor) setCurrentColor(currentThemeColor);
    }, []);

    const setMode = (mode) => {
        setCurrentMode(mode);
        localStorage.setItem('themeMode', mode);
        
        // Apply dark class to document element
        if (mode === 'Dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }


    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }



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
                currentColor, currentMode,
                themeSettings, setThemeSettings,
                setMode, setColor,

            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);