import Image from 'next/image';
import React from 'react'

type Props = {
    icon?: string;
    title?: string;
}

const SoftawareCard = ({ icon, title }: Props) => {
    return (
        <div className='bg-green-100 dark:bg-gray-800 p-6 rounded-lg'>
            {icon && <Image src={icon} alt='icon' width={50} height={50} />}
            <h1 className='text-xl mt-6 font-bold'>{title}</h1>
            <p className='text-gray-800 dark:text-gray-300 mt-3 font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className='px-6 py-1.5 rounded-full bg-blue-800 mt-4 font-bold hover:bg-blue-950 transition-all duration-200 cursor-pointer text-white'>Saiba Mais</button>
        </div>
    )
}

export default SoftawareCard