import React from 'react';
import { FaBootstrap,FaGithub } from "react-icons/fa";
import { SiGit,SiFirebase,SiNetlify } from "react-icons/si";
import { TbBrandOpenai,TbBrandVscode,TbBrandVercel } from "react-icons/tb";
import Marquee from "react-fast-marquee";

const Tools = () => {
    return (
        <div className='flex items-center bg-orange-400 lg:mt-8 py-6'>
            <h2 className='w-56 ml-12 rounded font-extrabold text-fuchsia-700 text-3xl'>Tools I Use</h2>
            <Marquee>
            <FaGithub className='text-6xl lg:mx-4'/>
            <FaBootstrap className='text-6xl lg:mx-4 text-blue-800'/>
            <SiFirebase className='text-5xl lg:mx-4 text-yellow-400'/>
            <TbBrandOpenai className='text-5xl lg:mx-4 bg-black text-blue-900'/>
            <SiNetlify className='text-6xl lg:mx-4 text-cyan-200'/>
            <TbBrandVercel className='text-5xl lg:mx-4'/>
            <SiGit className='text-5xl lg:mx-4 text-red-600'/>
            <TbBrandVscode className='text-5xl lg:mx-4 text-blue-600'/>
            </Marquee>
        </div>
    );
};

export default Tools;