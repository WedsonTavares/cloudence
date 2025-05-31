"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScroolToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    //show or hide fucionality

    useEffect(() => {

        const togleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else setIsVisible(false);
        };
        window.addEventListener('scroll', togleVisibility);

        return () => {
            window.removeEventListener('scroll', togleVisibility);
        };
    }, []);
    //scroll to top functionality

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='fixed bottom-4 animate-pulse right-4'>
            {isVisible && (
                <button
                    className=' bg-pink-500 cursor-pointer text-white rounded-full w-12 h-12 flex items-center
                justify-center focus:outline-none'
                    onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    )
}

export default ScroolToTop