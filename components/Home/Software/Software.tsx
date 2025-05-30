import React from 'react'
import SoftawareCard from './SoftawareCard'

const Software = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='text-center'>
                {/* subheading */}

                <h1 className='uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500'>
                    Softwares
                </h1>
                {/* heading */}
                <h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>
                    Impulsionando mudanças com softwares <br /> inovadores e bem-sucedidos.
                </h1>
            </div>
            {/* Cards */}
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                <div>
                    <SoftawareCard icon="/images/i1.png" title="Best Marketing Software" />
                </div>
                <div>
                    <SoftawareCard icon="/images/i2.png" title="Product Sale Softaware" />
                </div>
                <div>
                    <SoftawareCard icon="/images/i3.png" title="Best Marketing Software" />
                </div>
            </div>
        </div>
    )
}

export default Software