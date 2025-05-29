import Image from 'next/image'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaRegFileCode } from 'react-icons/fa'
import { GrResources } from 'react-icons/gr'

const WhyChoose = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* text content */}
                <div>
                    {/* subheading */}
                    <p className='text-sm uppercase sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500'>
                        Por que nos escolher?
                    </p>
                    {/* leading */}
                    <h1 className='text-xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem]
                        md:leading-[3rem]'>
                        Inovações com excelência construindo juntos o futuro digital.
                    </h1>
                    {/* line */}
                    <div className='mt-8 mb-8 w-full h-[1px] bg-gray-200 dark:bg-gray-700'></div>
                    {/* list type feature*/}
                    {/* 1st item */}
                    <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                        <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                        rounded-full flex-col justify-center'>
                            <FaRegFileCode className='w-8 h-8 text-blue-600' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-xl font-bold'>Integração gratuita</h1>
                            <p className='text-gray-800 dark:text-gray-300 mt-2 w-[70%]'>
                                Alavancar com competência a tecnologia de ponta existente e maximizar o serviço de baixo custo realizado
                            </p>
                        </div>
                    </div>
                    {/* 2nd item */}
                    <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                        <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                        rounded-full flex-col justify-center'>
                            <GrResources className='w-8 h-8 text-blue-600' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-xl font-bold'>Recursos premium</h1>
                            <p className='text-gray-800 dark:text-gray-300 mt-2 w-[70%]'>
                                Alavancar com competência a tecnologia de ponta existente e maximizar o serviço de baixo custo realizado
                            </p>
                        </div>
                    </div>
                    {/* 3rd item */}
                    <div className='sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8'>
                        <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                        rounded-full flex-col justify-center'>
                            <BiSupport className='w-8 h-8 text-blue-600' />
                        </div>
                        <div className='flex-1'>
                            <h1 className='text-xl font-bold'>Suporte Ilimitado</h1>
                            <p className='text-gray-800 dark:text-gray-300 mt-2 w-[70%]'>
                                Alavancar com competência a tecnologia de ponta existente e maximizar o serviço de baixo custo realizado
                            </p>
                        </div>
                    </div>
                </div>
                {/* image content */}
                <div>
                    <Image src="/images/wc.png" alt="whychoose" width={800} height={800}/>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose