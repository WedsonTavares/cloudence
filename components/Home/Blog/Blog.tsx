import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className='pt-16 pb-16'>
            {/* heading section*/}
            <div className='text-center'>
                {/* subheading */}
                <h1 className='uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500'>
                    Novidades
                </h1>
                {/* heading */}
                <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
                    Leia nossos últimos insights em nossas <br /> postagens no nosso blog
                </h1>
            </div>
            <div className='w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                <div
                    data-aos="fade-right">
                    <BlogCard
                        image="/images/b1.png"
                        title="Experimente conselhos para aumentar sua presença digital"
                    />
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-delay="100">
                    <BlogCard
                        image="/images/b2.png"
                        title="Estratégias Baseadas em Dados e Estudos de Casos de Sucesso" />


                </div>
                <div
                    data-aos="fade-right"
                    data-aos-delay="200">
                    <BlogCard
                        image="/images/b3.png"
                        title="O blog Completo de SEO para Sucesso Digital"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog