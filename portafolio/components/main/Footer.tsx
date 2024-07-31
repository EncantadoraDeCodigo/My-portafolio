import React from "react";
import {
    RxDiscordLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { RxGithubLogo } from 'react-icons/rx';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    
                    <a 
                        href="https://github.com/EncantadoraDeCodigo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center my-[15px] cursor-pointer text-decoration-none"
                    >
                        <RxGithubLogo size={24} /> {/* Ícono de GitHub */}
                        <span className="text-[15px] ml-[6px]">GitHub</span>    
                    </a>


                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>


                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a 
                            href="https://www.instagram.com/victoria_brave_/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer text-decoration-none"
                            >
                            <FaInstagram /> {/* Usa el ícono de Instagram aquí */}
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                            </a>
                    
                            <a 
                                href="https://www.linkedin.com/in/luisa-victoria-sanchez-ramirez-77a564313/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-row items-center my-[15px] cursor-pointer text-decoration-none"
                            >
                                <FaLinkedin /> 
                                <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                            </a>

                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
    
                    
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">luisavs1cantante@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; EncantadoraDeCodigo 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer