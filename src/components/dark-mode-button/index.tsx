"use client"
import { useState, useEffect } from 'react';
import { CiDark } from 'react-icons/ci';

const DarkModeButton = () => {
    var localS;
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        localS = localStorage
    }
    
    const [isDarkMode, setIsDarkMode] = useState<boolean>(localS?.getItem("dm") && true || false);

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDarkMode) {
            localStorage.setItem("dm", "true")
            root.classList.add('dark');
        } else {
            localStorage.removeItem("dm")
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            type="button"
            className="p-2 rounded-full bg-secondary-light shadow-lg dark:bg-secondary-dark "
            onClick={toggleDarkMode}
        >
            <CiDark className={"w-6 h-6 text-primary-light"} />
        </button>
    );
};

export default DarkModeButton;
