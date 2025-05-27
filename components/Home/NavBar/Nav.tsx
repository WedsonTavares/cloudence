import Link from 'next/link'
import React from 'react'
import { NavLinks } from '../../../constant/constant'
// import { GrTechnology } from 'react-icons/gr'

function Nav() {
    return (
        <div className="transition-all duration-300 h-[12vh] z-[100] foxed w-full bg-blue-900">
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
                    {NavLinks.map((link) => (
                        <Link href={link.url} key={link.id} className="text-white hover:text-pink-300 text-sm font-semibold transition-all duration-200">
                            <p>{link.label}</p>
                        </Link>
                    ))}
                        </div>
            </div>
            </div>
            )
}

            export default Nav