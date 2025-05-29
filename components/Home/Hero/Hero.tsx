import React from 'react'

const Hero = () => {
    return (
        <div className='relative bg-blue-950 w-full h-screen flex justify-center flex-col '>
            <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* text content */}
                <div>
                    {/* subheading */}
                    <p className='text-sm sm:text-base md:text-xl font-bold text-white'>
                        A maior fábrica de desenvolvimento de software
                    </p>
                    {/* heading */}
                    <h1 className='text-4xl md:text-5xl lg:text-7xl mt-6 mb-6 font-bold 
                    text-white leading-[2.5rem] md:leading-[4rem] '>
                        Fornecendo soluções de software para qualquer<span className='text-yellow-300'> negócio!</span>
                    </h1>
                    {/* descripition */}
                    <p className='text-sm sm:text-base font-medium md:text-lg text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, exercitationem quasi suscipi.
                    </p>
                    {/* button */}
                    <a href="#_" className='relative inline-flex mt-8 items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'
                    >
                        <span className='w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0
                        -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group:hover-ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>

                        <span className='relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out
                        group-hover:text-white'>
                            Saiba mais
                        </span>
                    </a>
                </div>
                {/* img content */}
                <div className='mx-auto hidden xl:block'>
                    <img src="/images/hero.png" alt="hero" width={900} height={900}/>
                </div>
            </div>
        </div>
    )
}

export default Hero