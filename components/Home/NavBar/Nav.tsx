"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NavLinks } from '../../../constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'


type Props = {
    openNav: () => void;
}


const Nav = ({ openNav }: Props) => {

    const [navBG, setNavBG] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBG(true);
            if (window.scrollY < 90) setNavBG(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);

    }, [])

    return (
        <div className=
            {`transition-all ${navBG ? "bg-blue-900 shadow-md" : "fixed"} 
            duration-200 h-[12vh] z-[100] fixed w-full `}>

            <div className="flex items-center mx-auto h-full justify-between w-[90%] xl:w-[80%]">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
                        {/* trocar por logo oficial */}
                        <img
                            src="/icon.png"
                            alt="Logo CodeVance"
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    <h1 className="hidden sm:block text-xl md:text-2xl text-white font-bold">
                        CodeVance
                    </h1>
                </div>
                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => {
                        return (
                            <Link href={link.url} key={link.id} className="text-white hover:text-pink-300 text-sm font-semibold transition-all duration-200">
                                <p>{link.label}</p>
                            </Link>
                        );
                    })}
                </div>
                {/* buttons */}
                <div className="flex items-center space-x-4">
                    {/* 1st button create acount button*/}
                    <a href="#" className='px-5 py-2.5 relative rounded group 
                    font-medium text-white inline-block'>
                        <span className='absolute top-0 left-0 w-full h-full rounded
                        opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
                        <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter
                         group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500'></span>
                        <span className='absolute w-full h-full inset-0 transition-all duration-200 ease-out 
                        rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm
                        from-purple-600 to-blue-500'></span>
                        <span className='absolute inset-0 w-full h-full transition duration-200 ease-out
                        rounded bg-gradient-to-br to-purple-600 from-blue-500'></span>
                        <span className='relative'>Criar conta</span>
                    </a>
                    {/* themetoggle */}
                    {/* burger menu */}
                    <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
                </div>
            </div>
        </div>
    )
}
    
export default Nav;