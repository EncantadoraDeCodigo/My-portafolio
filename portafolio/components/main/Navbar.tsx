import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a
          href="#about-me"
          className="flex items-center h-full"
        >
          <Image
            src="/victoria.png"
            alt="logo"
            width={55}
            height={55}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            EncantadoraDeCodigo
          </span>
        </a>

        <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-4 px-4 py-2 rounded-full text-gray-200 w-[500px] h-full">
          <a href="#about-me" className="cursor-pointer px-4">About me</a>
          <a href="#skills" className="cursor-pointer px-4">Skills</a>
          <a href="#projects" className="cursor-pointer px-4">Projects</a>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;

