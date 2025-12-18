import { useState, useEffect } from 'react';

import type { DarkModeProps } from '@/types/index';

const useDarkMode = (): DarkModeProps => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return { darkMode, setDarkMode };
};

export default useDarkMode;
