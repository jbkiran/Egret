'use client';

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
    const {theme, toggleTheme }  = useTheme();

    return (
        <button onClick={toggleTheme} >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        
    );
}
