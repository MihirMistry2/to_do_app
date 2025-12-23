import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

import useDarkMode from '@/hooks/useDarkMode';

import { TOAST_MESSAGES } from '@/constants';
import showToast from '@/utils/toast';

const ToggleTheme: React.FC = (): React.ReactElement => {
    const { darkMode, setDarkMode } = useDarkMode();

    const handleThemeClick = () => {
        setDarkMode(!darkMode);

        if (darkMode) {
            showToast(TOAST_MESSAGES.LIGHT_MODE_ENABLED, 'light');
        } else {
            showToast(TOAST_MESSAGES.DARK_MODE_ENABLED, 'dark');
        }
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleThemeClick}
                className="md bg-surface-a20 dark:bg-surface-a20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition duration-200 ease-out outline-none active:scale-[0.97] md:h-8 md:w-8"
            >
                {darkMode ? (
                    <FaSun className="text-base text-yellow-400 md:text-sm" />
                ) : (
                    <FaMoon className="text-base text-blue-500 md:text-sm" />
                )}
            </button>
        </div>
    );
};

export default ToggleTheme;
