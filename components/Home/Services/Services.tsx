import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='pt-6 pb-6'>
            <div className='w-[80%] mx-auto'>
                {/* section heading */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    <div>

                        <h1 className='text-lg sm:text-xl md:text-2xl font-bold 
                        text-blue-700 dark:text-pink-500 uppercase'>
                            O que nós fornecemos
                        </h1>
                        <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
                            Fornecer serviços de software de alta qualidade para todos os setores
                        </h1>
                    </div>
                    <div className='lg:ml-auto'>
                        <a href="#_" className='w-full py-4 text-base sm:text-lg md:text-xl text-center
                        text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase 
                        hover:bg-blue-900 ease px-9 md:w-auto'>
                            Nossos Serviços
                        </a>
                    </div>
                </div>
                {/* section services */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16'>
                    <div>
                        <ServiceCard 
                        image="/images/s1.png" 
                        title="Desenvolvimento de Softwares Personalizados"/>
                    </div>
                    <div>
                        <ServiceCard 
                        image="/images/s2.png" 
                        title="Design e desenvolvimento de sites"/>
                    </div>
                    <div>
                        <ServiceCard 
                        image="/images/s3.png" 
                        title="Claude Serviços de Computação e Hospedagem"/>
                    </div>
                    <div>
                        <ServiceCard 
                        image="/images/s4.png" 
                        title="Integração de IA e aprendizado de máquina"/>
                    </div>
                    <div>
                        <ServiceCard 
                        image="/images/s5.png" 
                        title="Desenvolvimento Android e IOS"/>
                    </div>
                    <div>
                        <ServiceCard 
                        image="/images/s6.png" 
                        title="Gráficos 3D e Design Vetorial"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services