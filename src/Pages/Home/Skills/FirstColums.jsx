import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const FirstColums = () => {
    return (
             <div className='flex space-x-10'>
                {/* circel-1 */}
                <div style={{ width: 100, position: 'relative' }}>
                    <div style={{stroke:'red'}} className='text-center'>
                        <CircularProgressbar className='custom-progressbar' value={100} text={`${100}%`} />
                        <span style={{ position: 'absolute', top: 60, left: 33 }}><AiFillHtml5 className='text-3xl text-orange-400' /></span>
                    </div>
                </div>
                {/* circel-2 */}
                <div style={{ width: 100, position: 'relative' }}>
                    <div style={{}} className='text-center'>
                        <CircularProgressbar value={95} text={`${95}%`} />
                        <span style={{ position: 'absolute', top: 60, left: 33 }}><SiCss3 className='text-3xl text-orange-400' /></span>
                    </div>
                </div>
                {/* circel-3 */}
                <div style={{ width: 100, position: 'relative' }}>
                    <div style={{}} className='text-center'>
                        <CircularProgressbar value={70} text={`${70}%`} />
                        <span style={{ position: 'absolute', top: 60, left: 33 }}><TbBrandJavascript className='text-3xl text-orange-400' /></span>
                    </div>
                </div>
                {/* circel-3 */}
                <div style={{ width: 100, position: 'relative' }}>
                    <div style={{}} className='text-center'>
                        <CircularProgressbar value={70} text={`${70}%`} />
                        <span style={{ position: 'absolute', top: 60, left: 33 }}><FaReact className='text-3xl text-orange-400' /></span>
                    </div>
                </div>
            </div>
    );
};

export default FirstColums;