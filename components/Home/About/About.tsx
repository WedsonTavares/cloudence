import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* image contain */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center"
                >
                    <Image src="/images/about.png" alt="image" width={700} height={700} />
                </div>
                {/* text contain */}
                <div>
                    <p className='text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
                        Sobre nós
                    </p>
                    <h1 className='text-2xl md:text-3xl lg:text-4l mt-3 font-bold leading-[1.8rem] md:leading-[3rem]'>
                        Inovação e Excelência Construindo Juntos o Futuro Digital
                    </h1>
                    <p className='mt-3 text-gray-700 dark:text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src="/images/a1.png" alt="icon" width={50} height={50} />
                            <h1 className='text-lg sm:text-xl font-bold leading-5'>
                                Infraestrutura <br /> Gestão
                            </h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src="/images/a2.png" alt="icon" width={50} height={50} />
                            <h1 className='text-lg sm:text-xl font-bold leading-5'>
                                Integração em Nuvem <br /> Prestação de Serviços
                            </h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src="/images/a3.png" alt="icon" width={50} height={50} />
                            <h1 className='text-lg sm:text-xl font-bold leading-5'>
                                Software Personalizado <br /> Desenvolvimento
                            </h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src="/images/a4.png" alt="icon" width={50} height={50} />
                            <h1 className='text-lg sm:text-xl font-bold leading-5'>
                                Suporte Instantâneo <br /> Atendimento
                            </h1>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <a href="#_" className='w-full py-4 text-base text-center text-white transition-colors
                        font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto'>
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About