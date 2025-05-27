'use client';

import { createContext, useContext, useEffect, useState } from "react";

type Theme              = 'light'|'dark';
type ThemeContextType   = {
    theme : Theme;
    toggleTheme : () => void;
};
const ThemeContext      = createContext<ThemeContextType>({
    theme : 'light',
    toggleTheme : () => {},
});

export const ThemeProvider  = ({ children } : {children : React.ReactNode }) => {

    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {

        const stored        = localStorage.getItem('theme') as Theme;
        if(stored){
            setTheme(stored);
            document.documentElement.classList.add(stored);
        }
    }, []);

    const toggleTheme       = () => {
        const newTheme : Theme  = theme === 'light' ? 'dark' : 'light';

        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);