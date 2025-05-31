import React from 'react'
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-16 pb-16 bg-blue-950'>
            <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {/* 1st part */}
                <div >
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
                    <p className='mt-4 text-gray-200 font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    {/* social rede links*/}
                    <div className='mt-6 flex items-center space-x-2 '>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white rounded-full cursor-pointer hover:text-blue-800'>
                            <FaFacebook />
                        </div>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-pink-500 text-white rounded-full cursor-pointer hover:text-pink-800'>
                            <FaInstagram />
                        </div>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-black text-white rounded-full cursor-pointer hover:text-gray-500'>
                            <FaGithub />
                        </div>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white rounded-full cursor-pointer hover:text-red-700'>
                            <FaYoutube />
                        </div>
                        <div className='flex items-center justify-center flex-col w-8 h-8 bg-blue-500 text-white rounded-full cursor-pointer hover:text-blue-700'>
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
                {/* 2nd part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold text-white'>Empresa</h1>
                    <p className='footer__link'>Sobre Nós</p>
                    <p className='footer__link'>Novidades</p>
                    <p className='footer__link'>Nossos Clientes</p>
                    <p className='footer__link'>Liderança</p>
                    <p className='footer__link'>Carreiras</p>
                </div>
                {/* 3rd part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold text-white'>Recursos</h1>
                    <p className='footer__link'>Blog</p>
                    <p className='footer__link'>Eventos</p>
                    <p className='footer__link'>PodCasts</p>
                    <p className='footer__link'>Livros e Guias</p>
                </div>
                {/* 4nd part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold text-white'>Entre em Contato</h1>
                    <div className='mt-6'>
                        <h1 className='text-sm text-white'>Telefone</h1>
                        <h1 className='text-base font-bold text-yellow-300'>16 992332680</h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-sm text-white'>Ou pelo E-mail</h1>
                        <h1 className='text-base font-bold text-yellow-300'>software@gmail.com

                        </h1>
                    </div>
                </div>
            </div>
            {/* bottom part */}
            <div className='mt-8 w-[80%] mx-auto border-t text-gray-600 pt-8 flex-col
            md:flex-row items-center justify-between text-sm'>
                <p className='text-center text-white md:text-left'>Copyright © 2025 Webdev. Todos os direitos reservados.</p>
                <div className='flex items-center text-white space-x-4 mt-4 md:mt-0'>
                    <span>Redes Sociais: </span>
                    <span className='hover:text-gray-500 text-white cursor-pointer'>
                        <FaLinkedin />
                    </span>
                    <span className='hover:text-gray-500 text-black cursor-pointer'>
                        <FaGithub />
                    </span>
                    <span className='hover:text-gray-500 text-white cursor-pointer'>
                        <FaDribbble />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;