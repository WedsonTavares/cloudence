"use client"

import { useTheme } from 'next-themes';
import React, {useEffect } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeToogler = () => {

    const [mounted, setMounted] = React.useState(false);

    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className='p-2 transition'
        >
            {currentTheme === "dark" ? (
                <BiSun className='text-white w-6 h-6 cursor-pointer' />
            ) : (
                <BiMoon className='text-white w-6 h-6 cursor-pointer' />
            )}
        </button>
    )
}

export default ThemeToogler