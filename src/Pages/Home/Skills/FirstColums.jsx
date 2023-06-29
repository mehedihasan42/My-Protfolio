import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript,SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const FirstColums = () => {
    return (
             <div data-aos="fade-down-right" className='lg:flex justify-center space-x-10'>
                {/* circel-1 */}
                <div style={{ width: 120, position: 'relative' }}>
                    <div style={{stroke:'red'}} className='text-center'>
                        <CircularProgressbar className='custom-progressbar' value={100} text={`${100}%`} />
                        <span style={{ position: 'absolute', top: 70, left: 40 }}><AiFillHtml5 className='text-4xl text-red-400' /></span>
                    </div>
                </div>
                {/* circel-2 */}
                <div style={{ width: 120, position: 'relative' }}>
                    <div style={{}} className='text-center'>
                        <CircularProgressbar value={95} text={`${95}%`} />
                        <span style={{ position: 'absolute', top: 70, left: 40 }}><SiCss3 className='text-4xl text-blue-400' /></span>
                    </div>
                </div>
                {/* circel-3 */}
                <div style={{ width: 120, position: 'relative' }}>
                    <div style={{}} className='text-center'>
                        <CircularProgressbar value={70} text={`${70}%`} />
                        <span style={{ position: 'absolute', top: 70, left: 40 }}><SiJavascript className='text-4xl rounded text-yellow-500' /></span>
                    </div>
                </div>
                {/* circel-3 */}
                <div style={{ width: 120, position: 'relative' }}>
                    <div style={{}} className='text-center'>
                        <CircularProgressbar value={70} text={`${70}%`} />
                        <span style={{ position: 'absolute', top: 70, left: 40 }}><FaReact className='text-4xl font-extrabold rounded-lg text-sky-300' /></span>
                    </div>
                </div>
            </div>
    );
};

export default FirstColums;